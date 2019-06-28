import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SignupFormModel } from '../models/signup_form.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  constructor(private http: HttpClient) { }

  public signupEmail = '';
  public signupPassword = '';


  public initialSignup(email: string, password: string) {
    this.signupEmail = email;
    this.signupPassword = password;
    this.postSignup(email, password);
  }

  public postSignup(email: string, password: string) {
    let payload = new SignupFormModel(email, password);
    let body = JSON.stringify(payload);
    let ob = this.http.post("https://localhost:44393/api/signup", payload, httpOptions).subscribe((data: any[]) => console.log(data));
  }

}
