import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventFormComponent } from './edit-event-form.component';

describe('EditEventFormComponent', () => {
  let component: EditEventFormComponent;
  let fixture: ComponentFixture<EditEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
