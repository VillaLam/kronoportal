import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;

  constructor(private authservice: UserServiceService) { }

  ngOnInit(): void {
    this.authservice.updatemenu.subscribe(res => {
      this.headerDisplay();
    })
  }

  headerDisplay () {
    if ( sessionStorage.getItem("loggedin") === "true") {
      this.loggedIn = true;
    }
  }

}
