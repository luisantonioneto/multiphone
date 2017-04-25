import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { Cidade } from '../../modelo/cidade';
import { CadastroCidadePage } from '../cadastro-cidade/cadastro-cidade';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the ListaCidade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-cidade',
  templateUrl: 'lista-cidade.html'
})
export class ListaCidadePage {
  cidade: Cidade;
  cidades: Array<Cidade>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.listarCidades();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCidadePage');
  }

  listarCidades(){
    var url = 'http://localhost:8080/multiphone/sei/cidade/listar';
    this.http.get(url)
      .timeout(1000)
      .map(res => res.json())
      .subscribe(json => {
        this.cidades = json;
      })
  }

  abrirCadastroCidade(cidade: Cidade){
    this.navCtrl.push(CadastroCidadePage, {
      cidade: cidade
    })
  }
}
