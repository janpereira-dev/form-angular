import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise-formgroup',
  templateUrl: './exercise-formgroup.component.html',
  styleUrls: ['./exercise-formgroup.component.scss']
})
export class ExerciseFormgroupComponent {

  constructor(private fb: FormBuilder) { }
  exerciseForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    birthdate: [''],
    age: [''],
    expiryDateDni: ['']
  });

}
