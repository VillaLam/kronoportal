import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: Boolean = false;

  public logInForm: FormGroup;

  constructor(private fb: FormBuilder, private authservice: UserServiceService, private router: Router) {
    this.logInForm = this.fb.group({
      socialSecurityNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  logIn() {
    let role = this.logInForm.controls["role"].value;
    console.log(this.logInForm.value)
    this.authservice.logInUser(this.logInForm.value).subscribe(
      (res) => {
        console.log("User logged in", res)
        sessionStorage.setItem("loggedin", "true");
        sessionStorage.setItem("role", this.logInForm.controls["role"].value);
        sessionStorage.setItem("socialSecurityNumber", this.logInForm.controls["socialSecurityNumber"].value)

        this.authservice.setBearerToken(res["token"])

        this.loggedIn = true;

        if (role === "ADMIN") {
          this.router.navigate(['admin-dashboard'])
          this.authservice.updatemenu.next()
        }
        if (role === "DEBTOR") {
          this.router.navigate(['debtview'])
          this.authservice.updatemenu.next()
        }
      }
    )
    this.authservice.getUserBySocialSecurityNumber(this.logInForm.controls["socialSecurityNumber"].value).subscribe(
      (res) => {
        console.log(res, "getUserInfo")
      }
    )
  }



  /* getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  */

}
