import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { TopnavComponent } from './topnav.component';
import { MatMenuModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopnavComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TranslateModule.forRoot(), MatMenuModule, MatSidenavModule, MatTableModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
