import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss']
})
export class VerticalStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  developerTwoInfo = {
    name: 'Sola Fernandez, Ivelise',
    title: 'Associate Developer/Contractor', 
    address: '424 E 36th St, Apt 535, Charlotte, NC, 28205',
    linkedIn: 'https://www.linkedin.com/in/ivelisesola/',
    github: 'https://github.com/IveliseSola',
    email: 'solaivelise@yahoo.com',
    phoneNo: '(786) 449 6713',
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
