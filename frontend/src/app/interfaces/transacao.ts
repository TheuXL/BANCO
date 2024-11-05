// src/app/interfaces/transacao.ts
export interface Transacao {
    id?: number;         // ID opcional para novas transações
    tipo: 'receita' | 'despesa'; // Tipo da transação
    valor: number;      // Valor da transação
    categoria: string;  // Categoria da transação
    descricao?: string; // Descrição opcional
    created_at?: Date;  // Data de criação
  }
  