// src/app/components/listagem-transacao/listagem-transacao.component.ts

import { Component } from '@angular/core';
import { Transacao } from '../../interfaces/transacao'; // Importando a interface Transacao

@Component({
  selector: 'app-listagem-transacao',
  templateUrl: './listagem-transacao.component.html',
  styleUrls: ['./listagem-transacao.component.css']
})
export class ListagemTransacaoComponent {
  transacoes: Transacao[] = []; // Array para armazenar as transações

  constructor() {
    // Exemplo de inicialização de transações
    this.transacoes = [
      {
        id: 1,
        valor: 100,
        descricao: 'Pagamento de serviço',
        data: new Date('2024-10-01'), // Exemplo de data
        tipo: 'credito'
      },
      {
        id: 2,
        valor: 50,
        descricao: 'Compra de material',
        data: new Date('2024-10-02'),
        tipo: 'debito'
      }
    ];
  }

  // Método para adicionar uma nova transação (exemplo)
  adicionarTransacao(transacao: Transacao) {
    this.transacoes.push(transacao);
  }

  // Outros métodos para manipulação de transações podem ser adicionados aqui
}
