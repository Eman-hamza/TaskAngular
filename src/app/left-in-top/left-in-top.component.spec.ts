import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftInTopComponent } from './left-in-top.component';

describe('LeftInTopComponent', () => {
  let component: LeftInTopComponent;
  let fixture: ComponentFixture<LeftInTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftInTopComponent]
    });
    fixture = TestBed.createComponent(LeftInTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
