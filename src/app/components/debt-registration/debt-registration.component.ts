import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-debt-registration',
  templateUrl: './debt-registration.component.html',
  styleUrls: ['./debt-registration.component.css']
})
export class DebtRegistrationComponent implements OnInit {

  public ssnFromForm: FormGroup;

  constructor(private fb: FormBuilder, private authservice: UserServiceService, private router: Router) {
    this.ssnFromForm = this.fb.group({
      socialSecurityNumber: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  findDebtor() {
    console.log(this.ssnFromForm.value)
    let SSN = this.ssnFromForm.controls["socialSecurityNumber"].value;
    this.authservice.getUserBySocialSecurityNumber(SSN).subscribe(
      (res) => {
        sessionStorage.setItem("tempSSN", SSN);
        console.log("User has been found! : ", res)

        this.router.navigate(['newdebt'])
      }
    )
  }

}
