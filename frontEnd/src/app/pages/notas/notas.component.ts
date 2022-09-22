import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NotasService} from "../../shared/services/notas.service";
import {DxDataGridComponent} from "devextreme-angular";
import {Cliente} from "../../models/cliente";
import {ClientesService} from "../../shared/services/clientes.service";
import {NotaFiscal} from "../../models/notaFiscal";
import {ItensNota} from "../../models/itensNota";
import {Produto} from "../../models/produto";
import {ProdutosService} from "../../shared/services/produtos.service";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  @ViewChild (DxDataGridComponent , { static : false }) dataGrid : DxDataGridComponent | undefined

  notasFiscais: NotaFiscal[] = [];
  clientes: Cliente[] = [];
  itensNota: ItensNota[] = [];
  produtosList: Produto[] = [];

  constructor(
    private notasFiscaisService: NotasService,
    private clienteService: ClientesService,
    private produtoListService: ProdutosService) { }

  ngOnInit(): void {
    this.notasFiscaisService.getNotas().subscribe({
      next: value => {
        this.notasFiscais = value;
      },
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });

    this.clienteService.getClientes().subscribe({
      next: value => this.clientes = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });
    console.log(this.clientes);
    this.produtoListService.getProdutos().subscribe({
      next: value => this.produtosList = value,
      error: err => console.log('ERRO: ', err),
      complete: () => {}
    });
    console.log(this.produtosList);
  }

  onSaved(event: any){
    if(event.changes && event.changes.length>0) {
      if (event.changes[0].type == 'insert') {
        event.changes[0].data.id = null;

        this.notasFiscaisService.postNota(event.changes[0].data).subscribe({
          next: () => console.log,
          error: err => console.log(err),
          complete: () => console.log
        })
      }
      else if (event.changes[0].type == 'update') {

        this.notasFiscaisService.putNota(event.changes[0].data, event.changes[0].data).subscribe({
          next: () => console.log,
          error: err => console.log(err),
          complete: () => console.log
        })

      }
      else if (event.changes[0].type == 'remove') {
        this.notasFiscaisService.deleteNota(event.changes[0].key).subscribe({
          next: () => console.log,
          error: err => console.log(err),
          complete: () => console.log
        })
      }
    }
  }

  onInitNewRowNotaGrid(event: any) {
    if(event.data && !event.data.itensNota){
      event.data.itensNota = new Array<ItensNota>();
    }
  }

  valueChandeProduto(event: any, data: any) {
    data.setValue(this.produtosList.find(x => x.id==event));
  }

  onSavedItemGrid(event: any, data: any) {
    data.setValue(data.value)
  }
}

