import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  send: any = false;
  receive: any = true;
  newMessagge: any = false;
  opened: boolean = false;

  constructor(public authSvc: AuthService) {}

  ngOnInit(): void {}

  showSend(enviar: any) {
    let r = new Map(Object.entries(enviar));
    this.send = r.get('send');
    this.receive = r.get('receive');
    this.newMessagge = r.get('newMessagge');
  }

  showReceived(recibir: any) {
    let r = new Map(Object.entries(recibir));
    this.send = r.get('send');
    this.receive = r.get('receive');
    this.newMessagge = r.get('newMessagge');
  }

  showNew(nuevo: any) {
    let r = new Map(Object.entries(nuevo));
    this.send = r.get('send');
    this.receive = r.get('receive');
    this.newMessagge = r.get('newMessagge');
  }
}
