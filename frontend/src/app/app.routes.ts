// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CadastroTransacaoComponent } from './components/cadastro-transacao/cadastro-transacao.component';
import { ListagemTransacaoComponent } from './components/listagem-transacao/listagem-transacao.component';

export const routes: Routes = [
  { path: '', redirectTo: '/listagem-transacao', pathMatch: 'full' },
  { path: 'cadastro-transacao', component: CadastroTransacaoComponent },
  { path: 'listagem-transacao', component: ListagemTransacaoComponent },
];
