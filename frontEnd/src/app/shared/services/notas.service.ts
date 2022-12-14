import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NotaFiscal} from "../../models/notaFiscal";
import {Cliente} from "../../models/cliente";
import {ItensNota} from "../../models/itensNota";

const urlApi = 'http://localhost:8080/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }
  getNotas(): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(urlApi).pipe(take(1));
  }

  getItensNotas(id: number): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(urlApi).pipe(take(1));
  }

  postNota(nota: NotaFiscal): Observable<NotaFiscal[]>{
    return this.http.post<NotaFiscal[]>( `${urlApi}/nova`, nota).pipe(take(1));
  }

  putNota(nota: NotaFiscal, id: number): Observable<NotaFiscal[]>{
    return this.http.put<NotaFiscal[]>(`${urlApi}/altera`, nota).pipe(take(1));
  }

  deleteNota( id: number): Observable<NotaFiscal[]>{
    return this.http.delete<NotaFiscal[]>(`${urlApi}/deleta/${id}`).pipe(take(1));
  }

  getItensNotaFiscalId(idNota: number | undefined): Observable<ItensNota[]> {

    let itens: Observable<ItensNota[]>;

    itens = this.http.get<ItensNota[]>(`${urlApi}/${idNota}`).pipe(take(1));
    return this.http.get<ItensNota[]>(`${urlApi}/${idNota}`).pipe(take(1));
  }

}
