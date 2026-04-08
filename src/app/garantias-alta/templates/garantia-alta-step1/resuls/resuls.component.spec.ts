import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulsComponent } from './resuls.component';

describe('ResulsComponent', () => {
  let component: ResulsComponent;
  let fixture: ComponentFixture<ResulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResulsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
