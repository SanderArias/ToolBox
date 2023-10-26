import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversidadesPorPaisPage } from './universidades-por-pais.page';

describe('UniversidadesPorPaisPage', () => {
  let component: UniversidadesPorPaisPage;
  let fixture: ComponentFixture<UniversidadesPorPaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UniversidadesPorPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
