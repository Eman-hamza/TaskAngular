import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightInbottomComponent } from './right-inbottom.component';

describe('RightInbottomComponent', () => {
  let component: RightInbottomComponent;
  let fixture: ComponentFixture<RightInbottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightInbottomComponent]
    });
    fixture = TestBed.createComponent(RightInbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
