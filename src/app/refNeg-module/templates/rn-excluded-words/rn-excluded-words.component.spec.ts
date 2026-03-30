import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnExcludedWordsComponent } from './rn-excluded-words.component';

describe('RnExcludedWordsComponent', () => {
  let component: RnExcludedWordsComponent;
  let fixture: ComponentFixture<RnExcludedWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnExcludedWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnExcludedWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
