import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Transacao {
    id?: number;
    valor: number;
    tipo: 'receita' | 'despesa';
    categoria: string;
    descricao?: string;
    data?: Date;
}

@Injectable({
    providedIn: 'root'
})
export class TransacaoService {
    private apiUrl = 'http://localhost:8000/api/transacoes';

    constructor(private http: HttpClient) {}

    getTransacoes(): Observable<Transacao[]> {
        return this.http.get<Transacao[]>(this.apiUrl);
    }

    addTransacao(transacao: Transacao): Observable<Transacao> {
        return this.http.post<Transacao>(this.apiUrl, transacao);
    }

    updateTransacao(id: number, transacao: Transacao): Observable<Transacao> {
        return this.http.put<Transacao>(`${this.apiUrl}/${id}`, transacao);
    }

    deleteTransacao(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
