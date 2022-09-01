import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DebtServiceService } from 'src/app/services/debt-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-debt-creation',
  templateUrl: './debt-creation.component.html',
  styleUrls: ['./debt-creation.component.css']
})
export class DebtCreationComponent implements OnInit {
  public registerDebtForm: FormGroup

  constructor(private fb: FormBuilder, private debtservice: DebtServiceService) {
    this.registerDebtForm = this.fb.group({
      debtDescription: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z ]*")]),
      debtOrigin: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z ]*")]),
      amount: new FormControl('', [Validators.pattern("[0-9]+")]),
      planDuration: new FormControl('', [Validators.pattern("[0-9]+")]),
      planStart: new FormControl(''),
      socialSecurityNumber: new FormControl(sessionStorage.getItem("tempSSN")),
      planEnd: new FormControl(''),

    })
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerDebtForm.value)
    this.debtservice.addDebt(this.registerDebtForm.value).subscribe(
      (res) => {

        console.log("New debt registered")
      }
    )
  }
}
