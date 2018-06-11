import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet} from '@angular/router';
import {By} from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports : [RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a router outlet',  () =>{
    //let de = fixtur.debugElement.query(By.directive(RouterOutlet));

    const fixture = TestBed.createComponent(AppComponent);
    let de =   fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

});
