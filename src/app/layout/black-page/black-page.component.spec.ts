import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BlackPageComponent } from './black-page.component';

describe('BlackPageComponent', () => {
  let component: BlackPageComponent;
  let fixture: ComponentFixture<BlackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlackPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
