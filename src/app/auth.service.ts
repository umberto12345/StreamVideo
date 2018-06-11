import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import{Users} from './test/users';

@Injectable()
export class AuthService {
  public rules = {
    user: 1,
    admin: 2
  };

  private isAdmin:any;
  constructor(
    private http: HttpClient,private router:Router) {}

  url = 'https://api001.app/api/login';
  login(email: string, password: string) {
    return this.http.post<any>('https://api001.app/api/login', { email: email, password: password })
      .pipe(map((res:any) => {
        console.log("lol");
        console.log(res);
        var Tokens = res.success.token;
        var Role = res.role;
        console.log(Role + 'this is role');
        console.log(Tokens);
        // login successful if there's a jwt token in the response
        if (res && Tokens && Role == this.rules.user ) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email, token: Tokens }));
          return 1;

        }
        if(res && Tokens && Role == this.rules.admin) {

          localStorage.setItem('currentUser', JSON.stringify({Admtoken: Tokens }));
          localStorage.setItem('AdminUser', JSON.stringify({Admtoken: Tokens}));
          return 0;


        }

      }));

  }
  logoutUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    if(this.router.url != 'register' && this.router.url != 'login') {
      this.router.navigate(["login"]);
    }
  }
  logoutHide()
  {
    localStorage.removeItem('currentUser');
  }
  logoutAdmin()
  {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('AdminUser');
    this.router.navigate(["login"]);


  }


  getAdmin(): Observable<Users[]> {
    const AdminUser = JSON.parse(localStorage.getItem('AdminUser'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        Authorization: `Bearer ${AdminUser.Admtoken}`,
      })
    };

    return this.http.get<Users[]>('https://api001.app/api/admin', httpOptions);
  }





}
