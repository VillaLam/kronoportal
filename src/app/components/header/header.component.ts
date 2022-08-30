import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentRole: String;

  displayAdmin = false;
  displayCustomer = false;
  loggedIn;

  constructor(private authservice: UserServiceService) { }

  ngOnInit(): void {
    this.authservice.updatemenu.subscribe(res => {
      this.headerDisplay();
    })
  }
  logout() {
    sessionStorage.clear();
    sessionStorage.setItem("loggedin", "false");
    console.log("logged out");
    this.authservice.updatemenu.next()

  }

  headerDisplay() {
    if (sessionStorage.getItem("loggedin") === "true") {
      this.loggedIn = true;

      this.displayAdmin = this.currentRole == "ADMIN";
      this.displayCustomer = this.currentRole == "DEBTOR";
    } else
      this.loggedIn = false;

    this.displayAdmin = false;
    this.displayCustomer = false;
  }

}
