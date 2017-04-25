import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Estado } from '../../modelo/estado';

/*
  Generated class for the CadastroEstado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro-estado',
  templateUrl: 'cadastro-estado.html'
})
export class CadastroEstadoPage {
  estado: Estado;
  isReadonly = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.isReadonly = true;
    if(navParams.get('estado') == null){
      this.estado = new Estado();
    } else {
      this.estado = navParams.get('estado');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEstadoPage');
  }

  salvarEVoltar(estado: Estado){
    if(estado != null){
      this.mostrarMensagem('Salvo com sucesso');
      this.navCtrl.pop();
    }
  }

  mostrarMensagem(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

}
