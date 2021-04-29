/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainLoggedComponent } from './main-logged.component';

describe('MainLoggedComponent', () => {
  let component: MainLoggedComponent;
  let fixture: ComponentFixture<MainLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
