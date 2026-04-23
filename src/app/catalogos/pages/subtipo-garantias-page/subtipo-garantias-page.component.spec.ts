import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtipoGarantiasPageComponent } from './subtipo-garantias-page.component';

describe('SubtipoGarantiasPageComponent', () => {
  let component: SubtipoGarantiasPageComponent;
  let fixture: ComponentFixture<SubtipoGarantiasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtipoGarantiasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtipoGarantiasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
