import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>;
  //coursesService: CoursesService;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    //this.courses = []
    //this.coursesService = new CoursesService();
    //this.coursesService.list().subscribe(courses => this.courses = courses) para retornar cursos ao invés de um observable
    //  | assync faz a mesma coisa que o subscribe
    this.courses = this.coursesService.list();

  }

  ngOnInit(): void {
  }

}
