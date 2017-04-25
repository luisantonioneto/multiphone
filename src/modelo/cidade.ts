import { Estado } from '../modelo/estado';

export class Cidade{
    codCidade: number;
    nome: string;
    estado: Estado;

    fromJson(json){
        this.codCidade = json['codCidade'];
        this.nome = json['nome'];
        this.estado = json['Estado'];
        return this;
    }
}