import {Cliente} from "./cliente";
import {ItensNota} from "./itensNota";

  export class NotaFiscal {

  id: bigint | undefined;

  numeroNota: bigint | undefined;

  dataNota: Date | undefined;

  cliente: Cliente | undefined;

  itensNota: ItensNota[] | undefined;

}
