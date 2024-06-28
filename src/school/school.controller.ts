import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
  HttpCode,
  ParseArrayPipe,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller({ version: '1', path: 'schools' })
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async addSchool(
    @Body()
    createSchoolDto: CreateSchoolDto,
  ) {
    const newSchool = await this.schoolService.addSchool(createSchoolDto);
    return { data: newSchool, message: 'School created successfully' };
  }

  @Post('/multiple')
  async addSchools(
    @Body('schools', new ParseArrayPipe({ items: CreateSchoolDto }))
    createSchoolDtos: CreateSchoolDto[],
  ) {
    const schools = await this.schoolService.addMultipleSchools(
      createSchoolDtos,
    );
    return {
      data: schools,
      message: 'Schools created successfully. Duplicates removed',
    };
  }

  @Get()
  async findAll() {
    const schools = await this.schoolService.findAll();
    return { data: schools, message: 'Got schools' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const school = await this.schoolService.findById(id);
    if (school == null) {
      throw new NotFoundException('School not found');
    }
    return { data: school, message: 'Got school successfully' };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    const school = await this.schoolService.findById(id);
    if (school == null) {
      throw new BadRequestException('School does not exist');
    }
    if (school.name === updateSchoolDto.name) {
      delete updateSchoolDto.name;
    }
    if (school.acronym === updateSchoolDto.acronym) {
      delete updateSchoolDto.acronym;
    }
    const updatedSchool = await this.schoolService.update(id, updateSchoolDto);
    return { data: updatedSchool, message: 'School updated succesfully' };
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const school = await this.schoolService.findById(id);
    if (school == null) {
      throw new BadRequestException('School does not exist');
    }
    return this.schoolService.remove(id);
  }
}
