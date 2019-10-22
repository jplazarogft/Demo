import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
      password: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    });
  }

  submitForm = () => {};
}
