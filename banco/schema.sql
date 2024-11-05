
CREATE DATABASE IF NOT EXISTS gerenciador_financeiro;
USE gerenciador_financeiro;

-- Tabela para armazenar tipos de transações
CREATE TABLE tipos_transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Inserindo tipos de transações iniciais
INSERT INTO tipos_transacao (nome) VALUES 
    ('Aluguel'), 
    ('Pagamento'), 
    ('Prolabore'), 
    ('Outros');

-- Tabela para armazenar transações financeiras
CREATE TABLE transacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    tipo ENUM('receita', 'despesa') NOT NULL,
    data DATE NOT NULL,
    tipo_transacao_id INT,
    FOREIGN KEY (tipo_transacao_id) REFERENCES tipos_transacao(id) ON DELETE SET NULL
);

