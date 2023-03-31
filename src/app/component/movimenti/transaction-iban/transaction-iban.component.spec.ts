import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIbanComponent } from './transaction-iban.component';

describe('TransactionIbanComponent', () => {
  let component: TransactionIbanComponent;
  let fixture: ComponentFixture<TransactionIbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionIbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionIbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
