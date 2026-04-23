import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditElementComponent } from './modal-edit-element.component';

describe('ModalEditElementComponent', () => {
  let component: ModalEditElementComponent;
  let fixture: ComponentFixture<ModalEditElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
