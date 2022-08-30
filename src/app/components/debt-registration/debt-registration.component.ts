import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-debt-registration',
  templateUrl: './debt-registration.component.html',
  styleUrls: ['./debt-registration.component.css']
})
export class DebtRegistrationComponent implements OnInit {

  public findBySocialSecurityNumber: FormGroup;

  constructor(private fb: FormBuilder, private authservice: UserServiceService) {
    this.findBySocialSecurityNumber = this.fb.group({
      socialSecurityNumber: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  findDebtor() {
    console.log(this.findBySocialSecurityNumber.value)
    let SSN = this.findBySocialSecurityNumber.controls["socialSecurityNumber"].value;
    this.authservice.getUserBySocialSecurityNumber(SSN).subscribe(
      (res) => {
        console.log("User has been found! : ", res)
      }
    )
  }

}
