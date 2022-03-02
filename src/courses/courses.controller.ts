import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService){}

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
  createCourse(@Body() body) {
    return this.coursesService.createCourse(body);
  }

  //método de atualização de informação
  @Patch(':id')
  updateCourse(@Param('id') id, @Body() body) {
    //console.log(body)
    return  this.coursesService.updateCourse(id,body);
  }

  @Delete(':id')
  delete(@Param('id') id){
    return this.coursesService.removeCourse(id);
  }

}
