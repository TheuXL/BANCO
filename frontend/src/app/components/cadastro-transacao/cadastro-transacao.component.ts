import { Component } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';

@Component({
    selector: 'app-cadastro-transacao',
    templateUrl: './cadastro-transacao.component.html'
})
export class CadastroTransacaoComponent {
    valor: number = 0;
    tipo: 'receita' | 'despesa' = 'receita';
    categoria: string = '';
    descricao: string = '';

    constructor(private transacaoService: TransacaoService) {}

    cadastrarTransacao() {
        const transacao = { valor: this.valor, tipo: this.tipo, categoria: this.categoria, descricao: this.descricao };
        this.transacaoService.addTransacao(transacao).subscribe();
    }
}
