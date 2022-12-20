import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-move-configuration',
  templateUrl: './move-configuration.component.html',
  styleUrls: ['./move-configuration.component.css']
})
export class MoveConfigurationComponent implements OnInit {

  public moveForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initializeForm();
   }

  ngOnInit(): void {
    
  }
  public submitForm(): void {
    console.log(this.moveForm.getRawValue());
  }
  public restForm(): void {
    this.moveForm.reset();
  }
  private initializeForm(): void {
    this.moveForm = this.createMoveFormGroup();
  }
  
  private createMoveFormGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      rating: [''],
      releaseDate: [''],
      productionHouse: [''],
      poster: [''],
      description: [''],
      staring: ['']
    })
  }

}
