import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKpiSaveComponent } from './modal-kpi-save.component';

describe('ModalKpiComponent', () => {
  let component: ModalKpiSaveComponent;
  let fixture: ComponentFixture<ModalKpiSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalKpiSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalKpiSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
