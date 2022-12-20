import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.createLoginForm();
   }

  ngOnInit(): void {
  }

  private createLoginForm(): FormGroup {
    return this.fb.group({
      userName: [''],
      password: ['']
    });
  }
  public login(event: Event) {
    event.preventDefault();
    const user = this.loginForm.getRawValue();
    this.http.post<IUser>('api/v1/login', user).subscribe(
      {
        next: (data: IUser) => {
          console.log(data)
          sessionStorage.setItem('token', data.token);
        },
        error: (error: Error) => console.log(error)
      }
    )
  }

}
