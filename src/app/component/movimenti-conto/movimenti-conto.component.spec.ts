import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentiContoComponent } from './movimenti-conto.component';

describe('MovimentiContoComponent', () => {
  let component: MovimentiContoComponent;
  let fixture: ComponentFixture<MovimentiContoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentiContoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentiContoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
