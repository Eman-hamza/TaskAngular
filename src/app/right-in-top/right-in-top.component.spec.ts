import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightInTopComponent } from './right-in-top.component';

describe('RightInTopComponent', () => {
  let component: RightInTopComponent;
  let fixture: ComponentFixture<RightInTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightInTopComponent]
    });
    fixture = TestBed.createComponent(RightInTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
