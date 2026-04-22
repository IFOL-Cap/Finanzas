import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionPageComponent } from './emision-page.component';

describe('EmisionPageComponent', () => {
  let component: EmisionPageComponent;
  let fixture: ComponentFixture<EmisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmisionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
