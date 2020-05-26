import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private cursos = ['Angular2', 'Java', 'PhoneGap'];

    constructor(){
      console.log('CursosService')
    }

    getCursos() {
      return this.cursos;
    }

    addCurso(curso: string) {
      this.cursos.push(curso);
    }
}
