import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {createPasswordStrengthValidator} from '../validators/password-strength.validator';

@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  form = this.fb.group({
      email: this.fb.nonNullable.control('', {
        validators: [
          Validators.required,
          Validators.minLength(8)
        ],
        updateOn: 'blur'
      }),
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          createPasswordStrengthValidator()
        ],
        updateOn: 'blur'
      }],
    }
  );

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  login() {
    const formValue = this.form.value;
  }

  reset() {
    this.form.reset();
    console.log(this.form.value);
  }
}
