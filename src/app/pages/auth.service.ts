import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';

import { UserResponse, User } from '@shared/models/user.interface';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token);
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logout(): void {}
  private readToken(): void {}
  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handlerError(err: { message: any }): Observable<never> {
    let errorMessage = 'An error occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
