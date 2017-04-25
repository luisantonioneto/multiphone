import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Cidade } from '../../modelo/cidade';
import { Estado } from '../../modelo/estado';
//import { ListaEstadoPage } from '../lista-estado/lista-estado';
import { Http } from '@angular/http';

/*
  Generated class for the CadastroCidade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro-cidade',
  templateUrl: 'cadastro-cidade.html'
})
export class CadastroCidadePage {
  cidade: Cidade;
  estados: Array<Estado>;
  isReadonly = true;
  selected = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController, public http: Http) {
    this.listarEstados();      
    if(navParams.get('cidade') == null){
      this.cidade = new Cidade();
      this.cidade.estado = new Estado();
    } else {
      this.cidade = navParams.get('cidade');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCidadePage');
  }

  salvarEVoltar(cidade: Cidade){
    if(cidade != null){
      this.mostarMensagem('Salvo com sucesso');
      this.navCtrl.pop();
    } else {
      this.mostarMensagem('Falha ao incluir');
    }
  }

  mostarMensagem(mensagem: string){
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
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
