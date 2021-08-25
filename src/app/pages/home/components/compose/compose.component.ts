import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessaggesService } from '../../../auth/messagges.service';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  sen = {
    send: false,
    receive: true,
    newMessagge: false,
  };
  user: any;
  token: any;
  users: any = [];
  arrayUsers: any = [];
  @Output() recibir: EventEmitter<any> = new EventEmitter<any>();

  composeForm: FormGroup;

  constructor(private fb: FormBuilder, private messaggeSvc: MessaggesService) {
    this.composeForm = this.fb.group({
      destinatario: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.token = localStorage.getItem('token');
    this.getAllUsers();
    //ESTE DESPUES LO SACO
    console.log(this.user);
  }

  onSubmit() {
    const sender: any = this.user;
    const address = this.composeForm.value.destinatario;
    const messagge = this.composeForm.value.mensaje;
    const messaggeData = {
      sender: sender,
      address: address,
      messagge: messagge,
    };
    this.messaggeSvc.postMessagge(messaggeData, this.token).subscribe(
      () => {
        console.log(messaggeData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error');
          console.log(err);
        } else if (err.status == 200) {
          alert('Su mensaje fue enviado');
        } else {
          console.log(err.error.message);
        }
        this.receive();
      }
    );
  }

  receive() {
    this.sen;
    this.recibir.emit(this.sen);
  }

  getAllUsers() {
    this.messaggeSvc.getAllUsers(this.token).subscribe((data: any) => {
      this.users = data;
      var arraylength = this.users.length;

      for (let i = 0; i < arraylength; i++) {
        this.arrayUsers[i] = this.users[i].user;
      }
    });
  }
}
