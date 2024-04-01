import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCollectorComponent } from './type-collector.component';

describe('TypeCollectorComponent', () => {
  let component: TypeCollectorComponent;
  let fixture: ComponentFixture<TypeCollectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeCollectorComponent]
    });
    fixture = TestBed.createComponent(TypeCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
