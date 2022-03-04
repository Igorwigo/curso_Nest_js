import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do nestjs',
      description: 'Fundamentos do nestjs pela Udemy',
      tags: ['Course', 'nestjs', 'JavaScript', 'node.js'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));
    if (!course) {
      throw new HttpException(
        `The course with ID: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  createCourse(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  updateCourse(id: string, updateCourseDTO: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDTO;
  }

  removeCourse(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
