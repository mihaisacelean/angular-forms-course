import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val={
    email: "hello@gmail.com",
    password: "1234567"
  }

  constructor() { }

  ngOnInit() { }

  login(loginForm: NgForm, $event: any) {
    console.log(loginForm.value, loginForm.valid, $event);
    console.log("val", this.val)
  }

  onEmailChange($event: any) {
    console.log($event);
  }
}
