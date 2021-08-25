import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NewMessage } from '../../shared/models/messagges.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessaggesService {
  helper = new JwtHelperService();

  enviados: object | undefined;
  constructor(private http: HttpClient, authSvc: AuthService) {}

  receiveMessagges(user: any, token: any): Observable<any> {
    return this.http.get(`${environment.API_URL}/messagge/adress/"${user}"`, {
      headers: new HttpHeaders({ auth: token }),
    });
  }

  sendMessagges(user: any, token: any) {
    return this.http.get(`${environment.API_URL}/messagge/sender/"${user}"`, {
      headers: new HttpHeaders({ auth: token }),
    });
  }

  postMessagge(newMessagge: NewMessage, token: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/messagge`, newMessagge, {
      headers: new HttpHeaders({ auth: token }),
    });
  }

  deleteMessaggeReceive(messaggeId: number, token: any) {
    return this.http.patch(
      `${environment.API_URL}/messagge/deletereceived/${messaggeId}`,
      '',
      { headers: new HttpHeaders({ auth: token }) }
    );
  }

  deleteMessaggeSend(messaggeId: number, token: any) {
    return this.http.patch(
      `${environment.API_URL}/messagge/deletesender/${messaggeId}`,
      '',
      { headers: new HttpHeaders({ auth: token }) }
    );
  }

  getAllUsers(token: any) {
    return this.http.get(`${environment.API_URL}/users`, {
      headers: new HttpHeaders({ auth: token }),
    });
  }
}
