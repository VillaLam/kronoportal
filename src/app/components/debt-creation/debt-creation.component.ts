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
  public registerForm: FormGroup

  constructor(private fb: FormBuilder, private debtservice: DebtServiceService) {
    this.registerForm = this.fb.group({
      debtDescription: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z ]*")]),
      debtOrigin: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z ]*")]),
      amount: new FormControl('', [Validators.pattern("[0-9]+")]),
      planDuration: new FormControl('', [Validators.pattern("[0-9]+")]),
      planStart: new FormControl('', [Validators.pattern("[0-9]+"), Validators.minLength(6), Validators.maxLength(6)]),

    })
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value)
    this.debtservice.addDebt(this.registerForm.value).subscribe(
      (res) => {

        console.log("New debt registered")
      }
    )
  }
}
