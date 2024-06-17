import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  UseInterceptors,
  UploadedFiles,
  HttpCode,
  ParseIntPipe,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { UsersService } from 'src/users/users.service';
import { SchoolService } from 'src/school/school.service';
import { IsMongooseIdPipe } from 'src/pipes/mongoose-id.pipe';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ResourcesDocument } from './schemas/resources.schema';
import {
  Pagination,
  PaginationParams,
} from 'src/decorators/pagination.decorator';
import { ResourceType } from './enums/resources.enums';
import { AuthGuard } from 'src/auth/guard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller({ version: '1', path: 'resources' })
export class ResourcesController {
  constructor(
    private readonly resourcesService: ResourcesService,
    private readonly usersService: UsersService,
    private readonly schoolsService: SchoolService,
  ) {}

  @Post()
  async create(@Body() createResourceDto: CreateResourceDto) {
    const { creator, school } = createResourceDto;
    const userExists = await this.usersService.findById(creator);
    const schoolExists = await this.schoolsService.findById(school);

    if (userExists == null) {
      throw new BadRequestException('Creator does not exists');
    }

    if (schoolExists == null) {
      throw new BadRequestException('School does not exists');
    }

    const newResource = await this.resourcesService.create(createResourceDto);
    return { data: newResource, message: 'Resource created succesfully' };
  }

  @Get()
  async findAll(
    @PaginationParams() paginationParams: Pagination,
    @Query('q') q: string,
    @Query('type') resourceType: ResourceType,
  ) {
    const resources = await this.resourcesService.findAll({
      paginationParams,
      q,
      resourceType,
    });
    const total = await this.resourcesService.countAll();
    const { page, size } = paginationParams;
    const pages = Math.ceil(total / size);
    return {
      page,
      totalPages: pages,
      resourcesPerPage: size,
      message: 'Got resources succesfully',
      data: resources,
    };
  }

  @Get(':id')
  async findOne(@Param('id', IsMongooseIdPipe) id: string) {
    const resource = await this.resourcesService.findOne(id);
    if (resource == null) {
      throw new NotFoundException('Resource not found');
    }
    return { data: resource, message: 'Got resource' };
  }

  @Patch(':id')
  async update(
    @Param('id', IsMongooseIdPipe) id: string,
    @Body() updateResourceDto: UpdateResourceDto,
  ) {
    const resource: ResourcesDocument = await this.resourcesService.findOne(id);
    if (resource == null) {
      throw new NotFoundException('Resource not found');
    }
    return this.resourcesService.update(id, updateResourceDto);
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id', IsMongooseIdPipe) id: string) {
    const resource = await this.resourcesService.findOne(id);
    if (resource == null) {
      throw new BadRequestException('Resource does not exist');
    }
    return await this.resourcesService.remove(id);
  }

  @Patch('/star/:resourceId')
  async starAResource(
    @Param('resourceId', IsMongooseIdPipe) resourceId: string,
    @Req() req: Request,
  ) {
    const resource = await this.resourcesService.findOne(resourceId);
    if (resource == null) {
      throw new BadRequestException('Resource does not exist');
    }

    const { _id: userId } = req['user'];
    if (resource.stars.includes(userId)) {
      const userIdIdx = resource.stars.indexOf(userId);
      resource.stars.splice(userIdIdx, 1);
    } else {
      resource.stars.push(userId);
    }
    await resource.save();
    return { data: resource, message: 'Resource starred!' };
  }

  @Post('/upload-images/:resourceId')
  @UseInterceptors(FilesInterceptor('images'))
  async uploadResourceImages(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Param('resourceId', IsMongooseIdPipe) resourceId: string,
  ) {
    const resource = await this.resourcesService.findOne(resourceId);
    if (resource == null)
      throw new NotFoundException('Resource does not exist');

    const updatedImages = [...resource.images];
    let pageNo = updatedImages.at(-1)?.pageNo
      ? updatedImages.at(-1).pageNo + 1
      : 1;
    for (const image of images) {
      const { url } = await this.resourcesService.uploadResourceImage({
        file: image,
        resource,
        pageNo,
      });
      updatedImages.push({ pageNo, url });
      pageNo++;
    }
    resource.images = updatedImages;
    await resource.save();

    return { data: resource, message: 'Images uploaded succesfully' };
  }

  @HttpCode(204)
  @Delete('/delete-image/:resourceId/:pageNo')
  async deleteResourceImage(
    @Param('resourceId', IsMongooseIdPipe) resourceId: string,
    @Param('pageNo', ParseIntPipe) pageNo: number,
  ) {
    const resource = await this.resourcesService.findOne(resourceId);
    if (resource == null) {
      throw new NotFoundException('Resource not found');
    }

    await this.resourcesService.deleteResourceImage({ resource, pageNo });
    resource.images = resource.images.filter(
      (image) => image.pageNo !== pageNo,
    );
    await resource.save();
  }

  @HttpCode(204)
  @Delete('/delete-images/:resourceId/')
  async deleteResourceImages(
    @Param('resourceId', IsMongooseIdPipe) resourceId: string,
  ) {
    const resource = await this.resourcesService.findOne(resourceId);
    if (resource == null) {
      throw new NotFoundException('Resource not found');
    }

    await this.resourcesService.deleteResourceImages(resource);
    resource.images = [];
    await resource.save();
  }
}
