import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPedidoPage } from '../../pages/cadastro-pedido/cadastro-pedido';
import { Pedido } from '../../modelo/pedido';

/*
  Generated class for the ListaPedido page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-pedido',
  templateUrl: 'lista-pedido.html'
})
export class ListaPedidoPage {
  cadastroPedidoPage = CadastroPedidoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPedidoPage');
  }

  abrirCadastroPedido(event: Event, pedido: Pedido){
    if(pedido == null){
      pedido = new Pedido();
    }
    this.navCtrl.push(CadastroPedidoPage, {
      pedido: pedido
    })
  }

}
