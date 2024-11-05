// src/app/components/cadastro-transacao/cadastro-transacao.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../interfaces/transacao';

@Component({
  selector: 'app-cadastro-transacao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-transacao.component.html',
  styleUrls: ['./cadastro-transacao.component.scss']
})
export class CadastroTransacaoComponent {
  transacao: Transacao = {
    tipo: 'receita',
    valor: 0,
    categoria: '',
    descricao: '' // Nova propriedade para a descrição da transação
  };

  constructor(private transacaoService: TransacaoService) {}

  submitForm() {
    if (this.transacao.tipo === 'despesa') {
      this.transacao.valor = -Math.abs(this.transacao.valor);
    }
    this.transacaoService.createTransacao(this.transacao).subscribe(response => {
      console.log('Transação criada:', response);
      this.transacao = { tipo: 'receita', valor: 0, categoria: '', descricao: '' };
    });
  }
}
