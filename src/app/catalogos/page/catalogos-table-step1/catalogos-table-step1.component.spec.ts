import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosTableStep1Component } from './catalogos-table-step1.component';

describe('CatalogosTableStep1Component', () => {
  let component: CatalogosTableStep1Component;
  let fixture: ComponentFixture<CatalogosTableStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogosTableStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogosTableStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
