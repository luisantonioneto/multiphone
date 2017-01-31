import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CadastroEmpresa } from '../cadastroEmpresa/cadastroEmpresa';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  abrirCadastroEmpresa(){
    this.navCtrl.push(CadastroEmpresa);
  }

}
