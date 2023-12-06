import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWorkspaceNameComponent } from './app-workspace-name.component';

describe('AppWorkspaceNameComponent', () => {
  let component: AppWorkspaceNameComponent;
  let fixture: ComponentFixture<AppWorkspaceNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppWorkspaceNameComponent]
    });
    fixture = TestBed.createComponent(AppWorkspaceNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
