import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Empresa } from '../../modelo/empresa';

@Component({
  templateUrl: 'cadastroEmpresa.html'
})
export class CadastroEmpresa {
  empresa: Empresa;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.get('empresa') == null){
      this.empresa = new Empresa();
    } else {
      this.empresa = navParams.get('empresa');
    }
  }

}
