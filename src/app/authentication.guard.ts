import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  token;
  constructor(private router:Router,private strseivice:SessionService){
    this.token=this.strseivice.getToken();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem('token')!= null){
        return true;
          }
          else
          {
              this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
          }
  }
  
}
