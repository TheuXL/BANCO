// src/app/components/listagem-transacao/listagem-transacao.component.ts
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../interfaces/transacao';

@Component({
  selector: 'app-listagem-transacao',
  templateUrl: './listagem-transacao.component.html',
  styleUrls: ['./listagem-transacao.component.scss']
})
export class ListagemTransacaoComponent implements OnInit {
  transacoes: Transacao[] = [];
  transacaoParaEditar: Transacao | null = null;

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit() {
    this.loadTransacoes();
  }

  loadTransacoes() {
    this.transacaoService.getTransacoes().subscribe(data => {
      this.transacoes = data;
    });
  }

  deleteTransacao(id: number) {
    this.transacaoService.deleteTransacao(id).subscribe(() => {
      this.loadTransacoes();
    });
  }

  editTransacao(transacao: Transacao) {
    this.transacaoParaEditar = { ...transacao }; // Cria uma cópia da transação para evitar modificações diretas
  }

  updateTransacao() {
    if (this.transacaoParaEditar) {
      this.transacaoService.updateTransacao(this.transacaoParaEditar).subscribe(() => {
        this.loadTransacoes();
        this.transacaoParaEditar = null; // Limpa o formulário de edição após a atualização
      });
    }
  }

  cancelarEdicao() {
    this.transacaoParaEditar = null; // Cancela a edição e limpa o formulário
  }
}
