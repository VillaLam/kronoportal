import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganicRouteService } from '../services/organic-route.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private organicroute: OrganicRouteService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loginstatus = sessionStorage.getItem("loggedin")
    if (loginstatus === "true") {
      return true
    } else {
      console.log("you need to login")
      this.organicroute.openLogin();
      return false;
    }
  }

}
