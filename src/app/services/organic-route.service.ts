import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class OrganicRouteService {

  constructor(private router: Router, private location: Location) { }
  openLogin() {
    this.router.navigate(['login']);
  }
  openHome() {
    this.router.navigate(['home']);
  }

  navigateBack() {
    this.location.back();
  }
  openAdmin() {
    this.router.navigate(['admin-dashboard']);
  }

  openUserDasdhboard() {
    this.router.navigate(['mydebt'])
  }
  openDebtReg() {
    this.router.navigate(['debtregistration'])

  }


}
