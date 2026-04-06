import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTextAreaComponent } from './label-text-area.component';

describe('LabelTextAreaComponent', () => {
  let component: LabelTextAreaComponent;
  let fixture: ComponentFixture<LabelTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelTextAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
