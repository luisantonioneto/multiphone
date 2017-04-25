import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Endereco } from '../../modelo/endereco';

/*
  Generated class for the ConsultaCep page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-consulta-cep',
  templateUrl: 'consulta-cep.html'
})
export class ConsultaCepPage {
  cep: string;
  public endereco: Endereco;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    if(navParams.get('endereco') == null){
      this.endereco = new Endereco();
    } else {
      this.endereco = navParams.get('endereco');
    }
    
  }

  ionViewDidLoad() {
    this.cep = this.navParams.get('cep');
    console.log('ionViewDidLoad ConsultaCepPage');
  }

  consultarEndereco(event){
    var url = 'https://viacep.com.br/ws/' + this.cep + '/json/';
    this.http.get(url)
      .timeout(1000)
      .map(res => res.json())
      .subscribe(json => {
        this.endereco = new Endereco().fromJSON(json);
      });
  }
}