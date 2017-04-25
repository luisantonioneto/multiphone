export class Endereco{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;

    fromJSON(json){
        this.cep = json['cep'];
        this.logradouro = json['logradouro'];
        this.complemento = json['complemento'];
        this.bairro = json['bairro'];
        this.cidade = json['localidade'];
        this.uf = json['uf'];
        return this;
    }
}