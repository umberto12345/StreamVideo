import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
   private role: any;


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('AdminUser')) {
      return this.auth.getAdmin().map(e => {
        console.log(e);
        this.role = e;

        if (localStorage.getItem('AdminUser') && this.role === 2) {
          // logged in so return true
          return true;
        }
      });
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  return false ;
    // not logged in so redirect to login page with the return url
  }
}
