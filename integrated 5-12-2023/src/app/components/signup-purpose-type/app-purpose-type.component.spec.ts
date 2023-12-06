import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPurposeTypeComponent } from './app-purpose-type.component';

describe('AppPurposeTypeComponent', () => {
  let component: AppPurposeTypeComponent;
  let fixture: ComponentFixture<AppPurposeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPurposeTypeComponent]
    });
    fixture = TestBed.createComponent(AppPurposeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
