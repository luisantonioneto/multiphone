import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaEstadoPage } from '../lista-estado/lista-estado';
import { ListaCidadePage } from '../lista-cidade/lista-cidade';

/*
  Generated class for the Localidades page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-localidades',
  templateUrl: 'localidades.html'
})
export class LocalidadesPage {
  listaEstadoPage = ListaEstadoPage;
  listaCidadePage = ListaCidadePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalidadesPage');
  }

  abrirListaEstados(event: Event, listaEstado: ListaEstadoPage){
    
  }

}
