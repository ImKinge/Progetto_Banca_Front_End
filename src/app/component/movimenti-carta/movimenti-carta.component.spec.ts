import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentiCartaComponent } from './movimenti-carta.component';

describe('MovimentiCartaComponent', () => {
  let component: MovimentiCartaComponent;
  let fixture: ComponentFixture<MovimentiCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentiCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentiCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
