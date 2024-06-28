import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School, SchoolDocument } from './schemas/school.schema';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<School>) {}

  async addSchool(createSchoolDto: CreateSchoolDto): Promise<SchoolDocument> {
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

  async addMultipleSchools(
    createSchoolsDto: CreateSchoolDto[],
  ): Promise<SchoolDocument[]> {
    const schools = [] as SchoolDocument[];

    for (const school of createSchoolsDto) {
      const schoolExists = await this.schoolModel.findOne({
        $or: [{ name: school.name }, { acronym: school.acronym }],
      });
      if (!schoolExists) {
        const newSchool = await this.addSchool(school);
        schools.push(newSchool);
      }
    }

    return schools;
  }

  findAll(): Promise<SchoolDocument[] | null> {
    return this.schoolModel.find({}).sort({ name: 1 });
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
