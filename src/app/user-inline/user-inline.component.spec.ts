import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInlineComponent } from './user-inline.component';

describe('UserInlineComponent', () => {
  let component: UserInlineComponent;
  let fixture: ComponentFixture<UserInlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInlineComponent]
    });
    fixture = TestBed.createComponent(UserInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
