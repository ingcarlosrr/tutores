import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosEstudiantePage } from './datos-estudiante';

@NgModule({
  declarations: [
    DatosEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(DatosEstudiantePage),
  ],
})
export class DatosEstudiantePageModule {}
