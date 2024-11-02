// src/app/interfaces/transacao.ts

export interface Transacao {
    id: number;            // ID da transação
    valor: number;        // Valor da transação
    descricao: string;    // Descrição da transação
    data: Date;           // Data da transação
    tipo: 'credito' | 'debito'; // Tipo da transação
}
