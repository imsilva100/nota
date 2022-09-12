import {AfterViewInit, Component, Input, NgModule} from '@angular/core';
import {NotaFiscal} from "../../../models/notaFiscal";
import {ItensNota} from "../../../models/itensNota";
import {NotasService} from "../../services/notas.service";
import {DxDataGridModule} from "devextreme-angular";

@Component({
  selector: 'itensnota',
  templateUrl: './itensnota.component.html',
  styleUrls: ['./itensnota.component.scss']
})
export class ItensnotaComponent implements AfterViewInit {

  @Input() key: number | undefined;

  notaFiscal: NotaFiscal[] = [];
  itensNota: ItensNota[] = [];

  constructor( private notasFiscaisService: NotasService) { }

  ngAfterViewInit() {

    this.notasFiscaisService.getItensNotaFiscalId(this.key).subscribe({
      next: value => {
        this.itensNota = value;
        console.log("ItensnotaComponent: ", this.itensNota)
      },
      error: err => console.log(err),
      complete: () => console.log
    });
  }

  getItensNota($event: any) {
    this.notasFiscaisService.getItensNotas($event.changes[0].key).subscribe({
      next: value => {
        this.notaFiscal = value;
        console.log("ItensnotaComponent: ", this.notaFiscal)
      },
      error: err => console.log(err),
      complete: () => console.log
    });
  }
  completedValue(rowData: { Status: string; }) {
    return rowData.Status = this.itensNota.toString();
  }

  getValorUnitarioVenda(rowData: any) {
    return rowData.valorTotal / rowData.quantidade;
  }
}


@NgModule({
  declarations: [ItensnotaComponent],
  imports: [
    DxDataGridModule
  ],
  exports: [ItensnotaComponent]
})
export class ItensnotaModule { }
