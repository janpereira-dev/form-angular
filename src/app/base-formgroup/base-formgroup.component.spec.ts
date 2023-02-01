import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormgroupComponent } from './base-formgroup.component';

describe('BaseFormgroupComponent', () => {
  let component: BaseFormgroupComponent;
  let fixture: ComponentFixture<BaseFormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
