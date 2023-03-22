import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiBancariComponent } from './dati-bancari.component';

describe('DatiBancariComponent', () => {
  let component: DatiBancariComponent;
  let fixture: ComponentFixture<DatiBancariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatiBancariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiBancariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
