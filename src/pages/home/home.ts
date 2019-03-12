import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosEstudiantePage } from '../datos-estudiante/datos-estudiante';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  centrosEducativos = [
    {
      nombre: 'Nombre del centro educativo1',
      ID: 1,
      telefono: '',
    },
    {
      nombre: 'Nombre del centro educativo2',
      ID: 2,
      telefono: '',
    },
    {
      nombre: 'Nombre del centro educativo3',
      ID: 3,
      telefono: '',
    },
  ]
  constructor(public navCtrl: NavController) {

  }

  datosEstudiante() {
    this.navCtrl.push(DatosEstudiantePage);
  }
}
