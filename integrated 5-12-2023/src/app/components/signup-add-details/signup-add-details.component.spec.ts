import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAddDetailsComponent } from './signup-add-details.component';

describe('SignupAddDetailsComponent', () => {
  let component: SignupAddDetailsComponent;
  let fixture: ComponentFixture<SignupAddDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupAddDetailsComponent]
    });
    fixture = TestBed.createComponent(SignupAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
