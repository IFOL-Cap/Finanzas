import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosTableLayoutComponent } from './catalogos-table-layout.component';

describe('CatalogosTableLayoutComponent', () => {
  let component: CatalogosTableLayoutComponent;
  let fixture: ComponentFixture<CatalogosTableLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogosTableLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogosTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
