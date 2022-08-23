import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup

  constructor(private fb: FormBuilder, private authservice: UserServiceService) {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z ]*")]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z ]*")]),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      socialSecurityNumber: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    })
   }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value)
    this.authservice.createUser(this.registerForm.value).subscribe(
      (res) => {

        console.log("new user registered")
      }
    )
  }

}
