import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnSubCauseComponent } from './rn-sub-cause.component';

describe('RnSubCauseComponent', () => {
  let component: RnSubCauseComponent;
  let fixture: ComponentFixture<RnSubCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnSubCauseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnSubCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
