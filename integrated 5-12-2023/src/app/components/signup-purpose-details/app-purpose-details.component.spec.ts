import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPurposeDetailsComponent } from './app-purpose-details.component';

describe('AppPurposeDetailsComponent', () => {
  let component: AppPurposeDetailsComponent;
  let fixture: ComponentFixture<AppPurposeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPurposeDetailsComponent]
    });
    fixture = TestBed.createComponent(AppPurposeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
