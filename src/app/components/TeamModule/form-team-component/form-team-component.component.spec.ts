import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeamComponentComponent } from './form-team-component.component';

describe('FormTeamComponentComponent', () => {
  let component: FormTeamComponentComponent;
  let fixture: ComponentFixture<FormTeamComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTeamComponentComponent]
    });
    fixture = TestBed.createComponent(FormTeamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
