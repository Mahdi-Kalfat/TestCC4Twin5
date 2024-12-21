import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './components/participant/participant.component';

@NgModule({
  declarations: [
    ParticipantComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule
  ]
})
export class ParticipantModule { }