import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Mensaje } from '@shared/models/mensaje.interface';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent {
  composeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.composeForm = this.formBuilder.group({
      destinatario: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.composeForm.value);
  }
}
