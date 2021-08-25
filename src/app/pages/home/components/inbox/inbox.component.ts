import { HttpErrorResponse } from '@angular/common/http';
import {
  EventEmitter,
  Component,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessaggesService } from '../../../auth/messagges.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  count: number = 0;
  messagge: any = [{}];
  usuarioMostrar: any = [];
  displayedColumns: string[] = ['id', 'sender', 'messagges', 'date'];
  dataSource!: MatTableDataSource<object>;
  user: any;
  token: any;

  sen = {
    send: true,
    receive: false,
    newMessagge: false,
  };

  env = {
    send: false,
    receive: false,
    newMessagge: true,
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() enviar: EventEmitter<any> = new EventEmitter<any>();
  @Output() nuevo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private receiveSvc: MessaggesService, public dialog: MatDialog) {}
  ngOnInit() {
    this.user = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
    this.showMessagge();
  }

  showMessagge() {
    ///lOAD MESSAGES
    this.receiveSvc
      .receiveMessagges(this.user, this.token)
      .subscribe((data) => {
        this.messagge = data;
        ///  for invert numbers
        var arraylength = this.messagge.length;
        for (var messagge of this.messagge) {
          //// Numbers inverted
          messagge.id = arraylength;
          arraylength = arraylength - 1;
        }
        this.messagge = this.messagge.reverse();
        this.dataSource = new MatTableDataSource(this.messagge);
        this.dataSource.paginator = this.paginator;
      });
  }

  sended() {
    this.sen;
    this.enviar.emit(this.sen);
  }
  newMessagge() {
    this.env;
    this.nuevo.emit(this.env);
  }
}
export class DialogContentExampleDialog {}
