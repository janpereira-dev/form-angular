import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-formgroup',
  templateUrl: './base-formgroup.component.html',
  styleUrls: ['./base-formgroup.component.scss']
})
export class BaseFormgroupComponent implements OnInit {
  name = 'Jan Pereira';
  age = 41;
  email = 'jan.pereira@gft.com';
  maxAge = 100;
  maxLenght = 10;

  constructor(private fb: FormBuilder) { }

  profileForm: FormGroup = this.fb.group({
    firstName: [this.name, { validators: [Validators.required, Validators.maxLength(this.maxLenght)] }],
    age: [this.age],
    email: [this.email],
  });

  ngOnInit(): void {
    console.log('start');
  }


}
