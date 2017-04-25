import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/page1/page1';
import { CadastroEmpresa } from '../pages/cadastroEmpresa/cadastroEmpresa';
import { ListaEmpresa } from '../pages/listaEmpresa/listaEmpresa';
import { ConsultaCepPage } from '../pages/consulta-cep/consulta-cep';
import { LocalidadesPage } from '../pages/localidades/localidades';
import { ListaEstadoPage } from '../pages/lista-estado/lista-estado';
import { ListaCidadePage } from '../pages/lista-cidade/lista-cidade';
import { ListaPedidoPage } from '../pages/lista-pedido/lista-pedido';
import { CadastroPedidoPage } from '../pages/cadastro-pedido/cadastro-pedido';
import { CadastroEstadoPage } from '../pages/cadastro-estado/cadastro-estado';
import { CadastroCidadePage } from '../pages/cadastro-cidade/cadastro-cidade';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroEmpresa,
    ListaEmpresa,
    ConsultaCepPage,
    LocalidadesPage,
    ListaEstadoPage,
    ListaCidadePage,
    ListaPedidoPage,
    CadastroPedidoPage,
    CadastroEstadoPage,
    CadastroCidadePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroEmpresa,
    ListaEmpresa,
    ConsultaCepPage,
    LocalidadesPage,
    ListaEstadoPage,
    ListaCidadePage,
    ListaPedidoPage,
    CadastroPedidoPage,
    CadastroEstadoPage,
    CadastroCidadePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
