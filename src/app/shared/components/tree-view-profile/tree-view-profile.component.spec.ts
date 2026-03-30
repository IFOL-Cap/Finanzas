import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewProfileComponent } from './tree-view-profile.component';

describe('TreeViewProfileComponent', () => {
  let component: TreeViewProfileComponent;
  let fixture: ComponentFixture<TreeViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeViewProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
