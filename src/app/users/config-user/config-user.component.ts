import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.css']
})
export class ConfigUserComponent implements OnInit {
  public userForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.initializeForm();
   }

  ngOnInit(): void {
    
  }
  public addUser(): void {
    const userData = this.userForm.getRawValue();
    this.http.post('api/v1/users', userData).subscribe(
    {
      next: (data: any) => console.log(data),
      error: (error: Error) => console.log(error)
    });
  }
  public restForm(): void {
    this.userForm.reset();
    //this.userForm.controls['address'].reset();
  }
  private initializeForm(): void {
    this.userForm = this.createMoveFormGroup();
  }

  private createMoveFormGroup(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      middleName: [''],
      email: [''],
      password: [''],
              address: this.fb.group({
                house: [''],
                street: [''],
                state: [''],
                landmark: [],
                pin: [''],
                country: ['']
              })
    })
  }
}
