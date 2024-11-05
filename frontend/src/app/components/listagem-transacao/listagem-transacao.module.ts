// src/app/components/listagem-transacao/listagem-transacao.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTransacaoComponent } from './listagem-transacao.component'; // Caminho correto

@NgModule({
  declarations: [ListagemTransacaoComponent],
  imports: [CommonModule],
  exports: [ListagemTransacaoComponent] // Exporte se precisar usar em outros módulos
})
export class ListagemTransacaoModule {}
