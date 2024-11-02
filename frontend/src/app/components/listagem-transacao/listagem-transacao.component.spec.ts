import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTransacaoComponent } from './listagem-transacao.component';

describe('ListagemTransacaoComponent', () => {
  let component: ListagemTransacaoComponent;
  let fixture: ComponentFixture<ListagemTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
