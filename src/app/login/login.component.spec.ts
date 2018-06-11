import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {MatTabGroup} from '@angular/material';
import {MaterialModule} from '../material/material.module';
import {FormGroup} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../auth.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, RegisterComponent ],
      imports:[MaterialModule, RouterTestingModule ],
      providers:[AuthService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login', () => {
    expect(component).toBeTruthy();
  });
});
