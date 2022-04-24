import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmmentListComponent } from './appointmment-list.component';

describe('AppointmmentListComponent', () => {
  let component: AppointmmentListComponent;
  let fixture: ComponentFixture<AppointmmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
