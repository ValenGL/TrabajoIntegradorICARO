import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { ComposeComponent } from './components/compose/compose.component';
@NgModule({
  declarations: [
    HomeComponent,
    InboxComponent,
    OutboxComponent,
    ComposeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent, InboxComponent, OutboxComponent, ComposeComponent],
})
export class HomeModule {}
