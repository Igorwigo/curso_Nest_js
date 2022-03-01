import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService){}



  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Todos os cursos');
  }

  @Get(':id')
  findOne(@Param('id') params: string) { 
    //const a = params.id;
    return {'Curso':`${params}`};
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)//retorno 204, significa que foi feito mas nao tem nada para lhe retornar
  createCourse(@Body() body) {
    return body
  }

  //método de atualização de informação
  @Patch(':id')
  updateCourse(@Param('id') param, @Body() body) {
    console.log(body)
    return  `Curso com ID: ${param} atualizado com sucesso! e Título: ${body.Name}`;
  }

  @Delete(':id')
  delete(@Param('id') id){
    return `Curso com ID: ${id} deletado com sucesso!`
  }

}
