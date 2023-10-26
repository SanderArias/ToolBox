import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PredecirEdadPage } from './predecir-edad.page';

describe('PredecirEdadPage', () => {
  let component: PredecirEdadPage;
  let fixture: ComponentFixture<PredecirEdadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PredecirEdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
