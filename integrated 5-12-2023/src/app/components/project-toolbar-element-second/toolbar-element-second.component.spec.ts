import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarElementSecondComponent } from './toolbar-element-second.component';

describe('ToolbarElementSecondComponent', () => {
  let component: ToolbarElementSecondComponent;
  let fixture: ComponentFixture<ToolbarElementSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarElementSecondComponent]
    });
    fixture = TestBed.createComponent(ToolbarElementSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
