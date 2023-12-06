import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchFieldComponent } from './input-search-field.component';

describe('InputSearchFieldComponent', () => {
  let component: InputSearchFieldComponent;
  let fixture: ComponentFixture<InputSearchFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSearchFieldComponent]
    });
    fixture = TestBed.createComponent(InputSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
