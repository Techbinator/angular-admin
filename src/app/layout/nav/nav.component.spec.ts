import { ComponentFixture, fakeAsync, TestBed, inject } from '@angular/core/testing';
import { MatToolbarModule, MatSidenavModule, MatTableModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        RouterTestingModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  //   it('should compile', () => {
  //     expect(component).toBeTruthy();
  //   });
});
