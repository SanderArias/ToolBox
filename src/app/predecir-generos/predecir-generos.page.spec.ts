import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PredecirGenerosPage } from './predecir-generos.page';

describe('PredecirGenerosPage', () => {
  let component: PredecirGenerosPage;
  let fixture: ComponentFixture<PredecirGenerosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PredecirGenerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
