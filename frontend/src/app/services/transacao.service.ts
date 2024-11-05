// src/app/services/transacao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from '../interfaces/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private apiUrl = 'http://127.0.0.1:8000/api/transacoes';

  constructor(private http: HttpClient) {}

  // Obter todas as transações
  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.apiUrl);
  }

  // Criar uma nova transação
  createTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(this.apiUrl, transacao);
  }

  // Atualizar uma transação existente
  updateTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(`${this.apiUrl}/${transacao.id}`, transacao);
  }

  // Excluir uma transação
  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
