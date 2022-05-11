import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root' //a instância deste serbiço será disponibilizada por todo o projeto/raiz
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { } // chamada ajax

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
}
