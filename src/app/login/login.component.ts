import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit {

  indexTab:number;
  RouteLogin = '/login';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  tempVar;

  constructor(    private route: ActivatedRoute,
                         private formBuilder: FormBuilder,private router:Router, private  location: Location,private auth: AuthService) {
  }




  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required, Validators.minLength(5),Validators.email])],
      password: ['', Validators.required],
    });

    // reset login status

    if(this.router.url === '/login'){
      this.location.go('/login');
      $("mat-ink-bar").css("background","#00897b");

      console.log("sei dentro login");
      this.indexTab = 0;



    }
    if(this.router.url === '/register')
    {
      $("mat-ink-bar").css("background","green");

      this.location.go('register');
      this.indexTab = 1;

    }
   let  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  }

// convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Data" + data);
          this.tempVar = data;

        },
        error => {
          this.error = error;
          this.loading = false;
          console.log("errore" +           this.f.email.value) ;
        },
        () => {
          console.log(this.tempVar);
          if(this.tempVar === 0) {
            this.router.navigate(["/admin"]);

          }
          if (this.tempVar === 1) {
            console.log("stronzo");

            this.router.navigate(["/test/y"]);
          }

        });
  }

  public clickme(){ console.log("lol");

    console.log(this.location.path());
    if(this.location.path() == '/login')
    {
      this.location.go('/register');
      $("mat-ink-bar").css("background","green");



    }
else
  {
    if(this.location.path() == '/register')
    {
      $("mat-ink-bar").css("background","#00897b");

      this.location.go('/login');
      console.log("2");



    }
  }
  }
}
