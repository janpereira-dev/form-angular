import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { calculateAge } from 'src/app/utils/utils';

@Component({
  selector: 'app-exercise-formgroup',
  templateUrl: './exercise-formgroup.component.html',
  styleUrls: ['./exercise-formgroup.component.scss']
})
export class ExerciseFormgroupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  exerciseForm: FormGroup = this.fb.group({
    name: ['', { validators: [Validators.pattern('[a-zA-Z ]*'), Validators.required] }],
    email: ['', { validators: [Validators.pattern('/@caser.com$/'), Validators.required] }],
    birthdate: ['', { validators: [Validators.required] }],
    age: [''],
    expiryDateDni: ['', { validators: [Validators.required] }]
  });

  ngOnInit(): void {
    this.exerciseForm.valueChanges.subscribe((value) => {
      this.exerciseForm.get('age')?.setValue(calculateAge(value.birthdate));
    });
  }
}
