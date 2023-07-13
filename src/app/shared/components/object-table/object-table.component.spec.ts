import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTableComponent } from './object-table.component';

describe('ObjectTableComponent', () => {
  let component: ObjectTableComponent;
  let fixture: ComponentFixture<ObjectTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectTableComponent]
    });
    fixture = TestBed.createComponent(ObjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
