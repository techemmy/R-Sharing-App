import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School, SchoolDocument } from './schemas/school.schema';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<School>) {}

  async create(createSchoolDto: CreateSchoolDto): Promise<SchoolDocument> {
    const { name, acronym } = createSchoolDto;
    const schoolNameExists = await this.findByName(name);
    const schoolAcronymExists = await this.findByAcronym(acronym);
    if (schoolNameExists) {
      throw new BadRequestException('School name already exists');
    }
    if (schoolAcronymExists) {
      throw new BadRequestException('School acronym already exists');
    }
    return this.schoolModel.create(createSchoolDto);
  }

  findAll(): Promise<SchoolDocument[] | null> {
    return this.schoolModel.find({});
  }

  findById(id: string): Promise<SchoolDocument | null> {
    return this.schoolModel.findById(id);
  }

  findByName(name: string): Promise<SchoolDocument | null> {
    return this.schoolModel.findOne({ name });
  }

  findByAcronym(acronym: string): Promise<SchoolDocument | null> {
    return this.schoolModel.findOne({ acronym });
  }

  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    const { name, acronym } = updateSchoolDto;
    const schoolNameExists = await this.findByName(name);
    const schoolAcronymExists = await this.findByAcronym(acronym);
    if (schoolNameExists) {
      throw new BadRequestException('School name already exists');
    }
    if (schoolAcronymExists) {
      throw new BadRequestException('School acronym already exists');
    }
    return this.schoolModel.findByIdAndUpdate(id, updateSchoolDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.schoolModel.findByIdAndDelete(id);
  }
}
