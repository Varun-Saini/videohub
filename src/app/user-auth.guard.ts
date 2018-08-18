import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserAuthGuard implements CanActivate {
  //constructor(private authService: AuthService, private router: Router) {}
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('mtdUser')){
        return true;
      }
      this.router.navigate(['/login']);
    return false;
  }
}