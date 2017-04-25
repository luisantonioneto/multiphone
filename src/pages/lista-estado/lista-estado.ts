import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { Estado } from '../../modelo/estado';
import { CadastroEstadoPage } from '../cadastro-estado/cadastro-estado';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the ListaEstado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-estado',
  templateUrl: 'lista-estado.html'
})
export class ListaEstadoPage {
  estado: Estado;
  estados: Array<Estado>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.listarEstados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEstadoPage');
  }

  abrirCadastroEstado(estado: Estado){
    if(estado == null){
      estado = new Estado();
    }
    this.navCtrl.push(CadastroEstadoPage, {
      estado: estado
    });
  }  

 listarEstados(){
  var url = 'http://localhost:8080/multiphone/sei/estado/listar';
  this.http.get(url)
    .timeout(1000)
    .map(res => res.json())
    .subscribe(json => {
      this.estados = json;
    })
}  
}