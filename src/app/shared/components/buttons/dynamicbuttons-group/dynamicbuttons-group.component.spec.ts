import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicbuttonsGroupComponent } from './dynamicbuttons-group.component';

describe('DynamicbuttonsGroupComponent', () => {
  let component: DynamicbuttonsGroupComponent;
  let fixture: ComponentFixture<DynamicbuttonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicbuttonsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicbuttonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
