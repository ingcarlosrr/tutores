import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-datos-estudiante',
  templateUrl: 'datos-estudiante.html',
})
export class DatosEstudiantePage {
  profesoresAsignados = [
    {
      foto: './assets/icons/perfil.png',
      nombre: 'Nombre del profesor Materia'
    },
    {
      foto: './assets/icons/perfil.png',
      nombre: 'Nombre del profesor Materia'
    },
    {
      foto: './assets/icons/perfil.png',
      nombre: 'Nombre del profesor Materia'
    },
  ]
  materias = [
    {
      materia: 'Lengua española',
      promedio: 98
    },
    {
      materia: 'Matemáticas',
      promedio: 89
    },
    {
      materia: 'Sociales',
      promedio: 92
    },
    {
      materia: 'Naturales',
      promedio: 94
    },
  ];
  calificaciones = [
    {
      tipo: 'Examen parcial',
      materia: 'Lengua española',
      promedio: 98
    },
    {
      tipo: 'Examen parcial',
      materia: 'Matemáticas',
      promedio: 89
    },
    {
      tipo: 'Examen parcial',
      materia: 'Sociales',
      promedio: 92
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosEstudiantePage');
  }

}
