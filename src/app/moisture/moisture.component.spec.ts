import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoistureComponent } from './moisture.component';

describe('MoistureComponent', () => {
  let component: MoistureComponent;
  let fixture: ComponentFixture<MoistureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoistureComponent]
    });
    fixture = TestBed.createComponent(MoistureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
