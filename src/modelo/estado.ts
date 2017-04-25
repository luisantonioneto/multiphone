export class Estado{
    codEstado: number;
    nome: string;
    uf: string;

    fromJSON(json){
        this.codEstado = json['codEstado'];
        this.nome = json['nome'];
        this.uf = json['uf'];
        return this;
    }
}