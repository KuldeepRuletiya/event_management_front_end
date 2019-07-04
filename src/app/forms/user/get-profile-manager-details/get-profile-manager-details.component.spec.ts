import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfileManagerDetailsComponent } from './get-profile-manager-details.component';

describe('GetProfileManagerDetailsComponent', () => {
  let component: GetProfileManagerDetailsComponent;
  let fixture: ComponentFixture<GetProfileManagerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetProfileManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProfileManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
