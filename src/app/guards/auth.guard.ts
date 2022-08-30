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
    const currentrole = sessionStorage.getItem("role")
    if (currentrole === "DEBTOR") {
      return true
    } else {
      console.log("you need to login as a DEBTOR")
      this.organicroute.openLogin();
      return false;
    }
  }

}
