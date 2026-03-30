import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnLayoutComponent } from './rn-layout.component';

describe('RnLayoutComponent', () => {
  let component: RnLayoutComponent;
  let fixture: ComponentFixture<RnLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
