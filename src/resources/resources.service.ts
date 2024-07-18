import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Resources, ResourcesDocument } from './schemas/resources.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Pagination } from 'src/decorators/pagination.decorator';
import { ResourceType } from './enums/resources.enums';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resources.name) private resourceModel: Model<Resources>,
    private cloudinaryService: CloudinaryService,
  ) {}

  create(createResourceDto: CreateResourceDto): Promise<ResourcesDocument> {
    return this.resourceModel.create(createResourceDto);
  }

  findAll({
    resourceType,
    paginationParams,
    q,
  }: {
    resourceType?: ResourceType;
    paginationParams?: Pagination;
    q?: string;
  }): Query<ResourcesDocument[] | [], ResourcesDocument> {
    const validResourceTypes = Object.values(ResourceType);
    if (resourceType && !validResourceTypes.includes(resourceType)) {
      throw new BadRequestException(
        `Invalid resource type. Use ${validResourceTypes.join(' or ')}`,
      );
    }

    let resourceQuery = this.resourceModel
      .find()
      .populate('school')
      .populate('creator', '-password');
    if (q) {
      resourceQuery = resourceQuery.find({
        $or: [
          { courseName: { $regex: q, $options: 'i' } },
          { courseCode: { $regex: q, $options: 'i' } },
        ],
      });
    }

    if (resourceType) {
      resourceQuery = resourceQuery.where({ resourceType });
    }

    let limit: number, offset: number;
    if (paginationParams) {
      limit = paginationParams.limit;
      offset = paginationParams.offset;
    }

    return resourceQuery.limit(limit).skip(offset).sort({ createdAt: -1 });
  }

  countAll() {
    return this.resourceModel.countDocuments();
  }

  findOne(id: string) {
    return this.resourceModel
      .findById(id)
      .populate('school')
      .populate('creator', '-password');
  }

  update(id: string, updateResourceDto: UpdateResourceDto) {
    return this.resourceModel.findByIdAndUpdate(id, updateResourceDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.resourceModel.findByIdAndDelete(id);
  }

  async uploadResourceImage({
    file,
    resource,
    pageNo,
  }: {
    file: Express.Multer.File;
    resource: ResourcesDocument;
    pageNo: number;
  }) {
    const folder = `${resource.resourceType}`;
    return await this.cloudinaryService
      .uploadImage({ file, folder, public_id: `${resource.id}-${pageNo}` })
      .catch((e) => {
        if (e?.message && e?.http_code) {
          throw new BadRequestException(e?.message);
        }

        throw new InternalServerErrorException(
          'Internal error.\nKindly Contact support with the link at the bottom of the page.',
        );
      });
  }

  async deleteResourceImage({
    resource,
    pageNo,
  }: {
    resource: ResourcesDocument;
    pageNo: number;
  }) {
    const deleted = await this.cloudinaryService.deleteImage({
      folder: `${resource.resourceType}`,
      public_id: `${resource.id}-${pageNo}`,
    });

    if (deleted.result === 'not found') {
      throw new NotFoundException('Image not found');
    }
    return;
  }

  async deleteResourceImages(resource: ResourcesDocument): Promise<void> {
    for (const image of resource.images) {
      await this.cloudinaryService.deleteImage({
        folder: `${resource.resourceType}`,
        public_id: `${resource.id}-${image.pageNo}`,
      });
    }
    return;
  }
}
