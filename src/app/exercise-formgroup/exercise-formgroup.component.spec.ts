import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFormgroupComponent } from './exercise-formgroup.component';

describe('ExerciseFormgroupComponent', () => {
  let component: ExerciseFormgroupComponent;
  let fixture: ComponentFixture<ExerciseFormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseFormgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
