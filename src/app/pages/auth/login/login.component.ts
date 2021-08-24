import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  private isValidEmail = /\S+@\S+\.\S+/;
  private subscription: Subscription = new Subscription();
  // ojo la new Subscription
  loginForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.pattern(this.isValidEmail)],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const formValue = this.loginForm.value;
    this.subscription.add(
      this.authSvc.login(formValue).subscribe((res) => {
        if (res) {
          this.router.navigate(['/home']);
        }
      })
    );
  }

  getErrorMessage(field: string): string {
    let message: string = '';
    // Asi pude evitar el possibly null, junto con los ! OJO
    if (this.loginForm.get(field)!.errors!.required) {
      message = 'Debes ingresar un valor.';
    } else if (this.loginForm.get(field)!.hasError('pattern')) {
      message = 'No es un email valido.';
    } else if (this.loginForm.get(field)!.hasError('minlength')) {
      const minLength =
        this.loginForm.get(field)!.errors?.minlength.requiredLength;
      message = `Al menos ${minLength} caracteres.`;
    }
    return message;
  }

  isValidField(field: string): boolean {
    return (
      (this.loginForm.get(field)!.touched ||
        this.loginForm.get(field)!.dirty) &&
      !this.loginForm.get(field)!.valid
    );
  }
}
