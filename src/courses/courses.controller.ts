import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //const a = params.id;
    return this.coursesService.findOne(id);
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)//retorno 204, significa que foi feito mas nao tem nada para lhe retornar
  createCourse(@Body() courseDto: CreateCourseDto) {
    //DTO data transfer object define o que esperamos receber
    return this.coursesService.createCourse(courseDto);
  }

  //método de atualização de informação
  @Patch(':id')
  updateCourse(@Param('id') id, @Body() updateDTO: UpdateCourseDto) {
    //console.log(body)
    return this.coursesService.updateCourse(id, updateDTO);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.coursesService.removeCourse(id);
  }
}
