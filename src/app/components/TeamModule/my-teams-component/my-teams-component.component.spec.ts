import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsComponentComponent } from './my-teams-component.component';

describe('MyTeamsComponentComponent', () => {
  let component: MyTeamsComponentComponent;
  let fixture: ComponentFixture<MyTeamsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTeamsComponentComponent]
    });
    fixture = TestBed.createComponent(MyTeamsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
