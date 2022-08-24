import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm: FormGroup;

  constructor(private fb: FormBuilder, private authservice: UserServiceService ) {
    this.logInForm = this.fb.group({
      socialSecurityNumber: new FormControl('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
      role: new FormControl (''),
    })
   }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.logInForm.value)
    this.authservice.logInUser(this.logInForm.value).subscribe(
      (res) => {
        console.log("User logged in", res)
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
