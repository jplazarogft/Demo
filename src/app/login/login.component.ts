import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    password: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
  });

  constructor() {}

  ngOnInit() {}

  get password(): any {
    return this.form.get('password');
  }

  get user(): any {
    return this.form.get('user');
  }

  onSubmit = () => console.log(this.form.value);
}
