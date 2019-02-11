import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MaterialComponentsComponent } from './material-components.component';

describe('MaterialComponentsComponent', () => {
  let component: MaterialComponentsComponent;
  let fixture: ComponentFixture<MaterialComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialComponentsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
