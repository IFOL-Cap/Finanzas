import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddElementComponent } from './modal-add-element.component';

describe('ModalAddElementComponent', () => {
  let component: ModalAddElementComponent;
  let fixture: ComponentFixture<ModalAddElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAddElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
