import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoResultsComponent } from './catalogo-results.component';

describe('CatalogoResultsComponent', () => {
  let component: CatalogoResultsComponent;
  let fixture: ComponentFixture<CatalogoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
