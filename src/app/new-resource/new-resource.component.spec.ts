import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResourceComponent } from './new-resource.component';

describe('NewResourceComponent', () => {
  let component: NewResourceComponent;
  let fixture: ComponentFixture<NewResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewResourceComponent]
    });
    fixture = TestBed.createComponent(NewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
