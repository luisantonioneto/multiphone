import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CadastroEmpresa} from '../cadastroEmpresa/cadastroEmpresa';

import { Empresa } from '../../modelo/empresa';

@Component({
  templateUrl: 'listaEmpresa.html'
})
export class ListaEmpresa {
  empresaSelecionada: any;
  icons: string[];
  nome: string;
  empresa: Empresa;
  empresas: Array<Empresa>;
  // Array<{razaoSocial: string, note: string, icon: string}>;

    iniciarEmpresas(){
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

    this.empresas = [];

    for(let i = 1; i < 11; i++){
        this.empresa = new Empresa;
        this.empresa.razaoSocial = 'Empresa ' + i;
        this.empresa.nomeFantasia = 'Esta é a empresa #' + i;
        this.empresa.ativo = true;
        this.empresa.fornecedor = false;
        this.empresa.cliente = false;
        this.empresa.icon = this.icons[Math.floor(Math.random() * this.icons.length).toString()];

        this.empresas.push(this.empresa);
        }
    }    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.empresaSelecionada = navParams.get('empresa');

    this.iniciarEmpresas();
    this.nome = "Luis Antonio";
  }

  itemTapped(event, empresa) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CadastroEmpresa, {
      empresa: empresa
    });
  }

  abrirCadastroEmpresa(event: Event, empresa: Empresa){
    if(empresa == null){
      empresa = new Empresa();
    }
    this.navCtrl.push(CadastroEmpresa, {
        empresa: empresa
    });
  }

  getEmpresas(ev: any){
    // Reset items back to all of the items
    this.iniciarEmpresas();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.empresas = this.empresas.filter((empresa) => {
        return (empresa.razaoSocial.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }    
  }
}
