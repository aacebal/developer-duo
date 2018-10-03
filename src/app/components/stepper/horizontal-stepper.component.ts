import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss']
})
export class HorizontalStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  developerOneInfo = {
    name: 'Acebal Suarez, Adel',
    address: '424 E 36th St, Apt 535, Charlotte, NC, 28205',
    linkedIn: 'https://www.linkedin.com/in/adelacebal/',
    github: 'https://github.com/aacebal',
    email: 'acebaladel@gmail.com',
    phoneNo: '(786) 365 5023',
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

