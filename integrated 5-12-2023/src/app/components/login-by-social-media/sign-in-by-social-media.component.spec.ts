import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInBySocialMediaComponent } from './sign-in-by-social-media.component';

describe('SignInBySocialMediaComponent', () => {
  let component: SignInBySocialMediaComponent;
  let fixture: ComponentFixture<SignInBySocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInBySocialMediaComponent]
    });
    fixture = TestBed.createComponent(SignInBySocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
