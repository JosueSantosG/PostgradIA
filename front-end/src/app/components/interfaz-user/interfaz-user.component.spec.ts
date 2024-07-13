import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazUserComponent } from './interfaz-user.component';

describe('InterfazUserComponent', () => {
  let component: InterfazUserComponent;
  let fixture: ComponentFixture<InterfazUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfazUserComponent]
    });
    fixture = TestBed.createComponent(InterfazUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
