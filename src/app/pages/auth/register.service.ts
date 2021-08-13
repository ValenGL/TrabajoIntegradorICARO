import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRegister } from '../../shared/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(regData: UserRegister): Observable<any> {
    return this.http.post(`${environment.API_URL}/users`, regData);
  }
}
