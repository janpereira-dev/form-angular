import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validator/forbidden-name';

@Component({
  selector: 'app-base-formgroup',
  templateUrl: './base-formgroup.component.html',
  styleUrls: ['./base-formgroup.component.scss']
})
export class BaseFormgroupComponent {
  name = 'Jan Pereira';
  age = 41;
  email = 'jan.pereira@gft.com';
  maxAge = 100;
  maxLenght = 10;

  constructor(private fb: FormBuilder) { }

  profileForm: FormGroup = this.fb.group({
    firstName: [this.name, { validators: [Validators.required, Validators.maxLength(this.maxLenght)] }],
    age: [this.age],
    email: [this.email, { validators: [Validators.required, ForbiddenNameValidator(/jan/i)] }],
  });
}
