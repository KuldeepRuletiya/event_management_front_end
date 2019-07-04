import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagerEventDetailsComponent } from './get-manager-event-details.component';

describe('GetManagerEventDetailsComponent', () => {
  let component: GetManagerEventDetailsComponent;
  let fixture: ComponentFixture<GetManagerEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetManagerEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetManagerEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
