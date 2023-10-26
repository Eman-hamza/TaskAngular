import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStartComponent } from './time-start.component';

describe('TimeStartComponent', () => {
  let component: TimeStartComponent;
  let fixture: ComponentFixture<TimeStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeStartComponent]
    });
    fixture = TestBed.createComponent(TimeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
