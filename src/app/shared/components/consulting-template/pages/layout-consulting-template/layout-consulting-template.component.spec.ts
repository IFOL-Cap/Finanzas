import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConsultingTemplateComponent } from './layout-consulting-template.component';

describe('LayoutConsultingTemplateComponent', () => {
  let component: LayoutConsultingTemplateComponent;
  let fixture: ComponentFixture<LayoutConsultingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutConsultingTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutConsultingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
