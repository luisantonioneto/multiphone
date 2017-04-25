import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/page1/page1';
import { ListaEmpresa } from '../pages/listaEmpresa/listaEmpresa';
import { ConsultaCepPage } from '../pages/consulta-cep/consulta-cep';
import { LocalidadesPage } from '../pages/localidades/localidades';
import { ListaPedidoPage } from '../pages/lista-pedido/lista-pedido';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  icon: string;

  constructor(public platform: Platform) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage, icon: 'home' },
      { title: 'Consulta Cep', component: ConsultaCepPage, icon: 'search'},
      { title: 'Empresas', component: ListaEmpresa, icon: 'paper'},
      { title: 'Localidades', component: LocalidadesPage, icon: 'pin'},
      { title: 'Pedidos', component: ListaPedidoPage, icon: 'list-box'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
