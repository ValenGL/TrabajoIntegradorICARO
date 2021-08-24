import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent {
  displayedColumns: string[] = [
    'remitente',
    'destinatario',
    'fecha',
    'mensaje',
  ];

  dataSource = [];

  constructor() {}
}
