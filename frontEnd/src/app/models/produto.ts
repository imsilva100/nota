export class Produto {

  id: bigint | undefined;
  codigo: string | undefined;
  descricao: string | undefined;
  preco: number | undefined


   getDisplayValue(){
    return this.codigo + " - " + this.descricao;
   }
}
