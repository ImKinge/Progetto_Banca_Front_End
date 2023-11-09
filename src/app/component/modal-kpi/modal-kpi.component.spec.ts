import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKpiComponent } from './modal-kpi.component';

describe('ModalKpiComponent', () => {
  let component: ModalKpiComponent;
  let fixture: ComponentFixture<ModalKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalKpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
