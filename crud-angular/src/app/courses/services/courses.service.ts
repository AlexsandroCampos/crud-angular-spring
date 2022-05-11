import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root' //a instância deste serbiço será disponibilizada por todo o projeto/raiz
})
export class CoursesService {

  private readonly api ='/assets/courses.json'

  constructor(private httpClient: HttpClient) { } // chamada ajax

  list(){
    return this.httpClient.get<Course[]>(this.api)
    .pipe(
      first(), //Pegar apenas a primeira resposta
      tap(courses => console.log(courses))
    );
  }
}
