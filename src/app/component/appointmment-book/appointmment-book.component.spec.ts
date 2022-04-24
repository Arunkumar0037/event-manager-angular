import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmmentBookComponent } from './appointmment-book.component';

describe('AppointmmentBookComponent', () => {
  let component: AppointmmentBookComponent;
  let fixture: ComponentFixture<AppointmmentBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmmentBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmmentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
