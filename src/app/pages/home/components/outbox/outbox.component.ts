import { HttpErrorResponse } from '@angular/common/http';
import {
  EventEmitter,
  Component,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MessaggesService } from '../../../auth/messagges.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss'],
})
export class OutboxComponent implements OnInit {
  count: number = 0;
  messagge: any = [];
  usuarioMostrar: any = [];
  displayedColumns: string[] = ['id', 'address', 'messagges', 'date'];
  dataSource!: MatTableDataSource<any>;
  user: any;
  token: any;
  rec = {
    send: false,
    receive: true,
    newMessagge: false,
  };
  env = {
    send: false,
    receive: false,
    newMessagge: true,
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() nuevo: EventEmitter<any> = new EventEmitter<any>();

  @Output() recibir: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sendSvc: MessaggesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
    this.showMessagge();
  }

  showMessagge() {
    this.sendSvc.sendMessagges(this.user, this.token).subscribe((data) => {
      this.messagge = data;

      ///  for invert numbers

      var arraylength = this.messagge.length;

      for (var messagge of this.messagge) {
        //// Numbers invert
        messagge.id = arraylength;
        arraylength = arraylength - 1;
      }
      this.messagge = this.messagge.reverse();
      this.dataSource = new MatTableDataSource(this.messagge);
      this.dataSource.paginator = this.paginator;
    });
  }

  received() {
    this.rec;
    this.recibir.emit(this.rec);
  }

  newMessagge() {
    this.env;
    this.nuevo.emit(this.env);
  }
}
