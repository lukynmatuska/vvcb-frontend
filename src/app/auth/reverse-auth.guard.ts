import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseAuthGuard  {
  constructor(private readonly authService: AuthService, private readonly router: Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isLoggedIn()){
      return true;
    }
    return this.router.parseUrl("/");
  }
  
}
