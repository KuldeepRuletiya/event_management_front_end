import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfillistComponent } from './profillist.component';

describe('ProfillistComponent', () => {
  let component: ProfillistComponent;
  let fixture: ComponentFixture<ProfillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
