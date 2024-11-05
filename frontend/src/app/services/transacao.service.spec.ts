import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TransacaoService } from './transacao.service';
import { Transacao } from '../interfaces/transacao';

describe('TransacaoService', () => {
  let service: TransacaoService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://127.0.0.1:8000/api/transacoes'; // URL simulada para o teste

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransacaoService]
    });
    service = TestBed.inject(TransacaoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve obter todas as transações', () => {
    const mockTransacoes: Transacao[] = [
      { id: 1, tipo: 'receita', valor: 100, descricao: 'Salário', categoria: 'Trabalho' },
      { id: 2, tipo: 'despesa', valor: -50, descricao: 'Aluguel', categoria: 'Moradia' }
    ];

    service.getTransacoes().subscribe(transacoes => {
      expect(transacoes.length).toBe(2);
      expect(transacoes).toEqual(mockTransacoes);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockTransacoes);
  });

  it('deve criar uma nova transação', () => {
    const newTransacao: Transacao = { id: 3, tipo: 'receita', valor: 200, descricao: 'Freelance', categoria: 'Trabalho' };

    service.createTransacao(newTransacao).subscribe(transacao => {
      expect(transacao).toEqual(newTransacao);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newTransacao);
  });

  it('deve atualizar uma transação existente', () => {
    const updatedTransacao: Transacao = { id: 1, tipo: 'despesa', valor: -150, descricao: 'Supermercado', categoria: 'Alimentação' };

    service.updateTransacao(updatedTransacao).subscribe(transacao => {
      expect(transacao).toEqual(updatedTransacao);
    });

    const req = httpMock.expectOne(`${apiUrl}/${updatedTransacao.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedTransacao);
  });

  it('deve excluir uma transação', () => {
    const transacaoId = 1;

    service.deleteTransacao(transacaoId).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`${apiUrl}/${transacaoId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
