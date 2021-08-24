import { Component } from '@angular/core';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss'],
})
export class OutboxComponent {
  displayedColumns: string[] = [
    'remitente',
    'destinatario',
    'fecha',
    'mensaje',
  ];

  dataSource = [];

  constructor() {}
}
