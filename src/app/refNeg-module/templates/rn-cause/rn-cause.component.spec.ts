import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnCauseComponent } from './rn-cause.component';

describe('RnCauseComponent', () => {
  let component: RnCauseComponent;
  let fixture: ComponentFixture<RnCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnCauseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
