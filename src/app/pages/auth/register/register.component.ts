import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  countries = this._countriesService.getCountries();

  constructor(
    private _countriesService: CountriesService,
    private authSvc: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: [
          '',
          [Validators.required, Validators.minLength(6), Validators.email],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('password', 'passwordconfirm'),
      }
    );
  }

  onSubmit() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const role = 'reader';
    const country = this.registerForm.value.country;
    const city = this.registerForm.value.city;
    const userData = {
      username: username,
      password: password,
      role: role,
      country: country,
      city: city,
    };
    this.authSvc.register(userData).subscribe(
      () => {
        console.log(userData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error');
          console.log(err);
        } else if (err.status == 200) {
          alert('Usuario creado');
        } else {
          console.log(err.error.message);
        }
      }
    );
  }
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
