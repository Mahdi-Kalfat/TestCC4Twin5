import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsModuleComponent } from './participants-module.component';

describe('ParticipantsModuleComponent', () => {
  let component: ParticipantsModuleComponent;
  let fixture: ComponentFixture<ParticipantsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantsModuleComponent]
    });
    fixture = TestBed.createComponent(ParticipantsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
