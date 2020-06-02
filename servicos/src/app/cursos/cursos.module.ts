import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  //providers: [CursosService], //Quando adicionamos um provider em um module a gente cria um singleton do provider.
  exports: [CursosComponent]
})
export class CursosModule { }
