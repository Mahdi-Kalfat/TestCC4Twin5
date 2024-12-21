import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './components/participant/participant.component';

const routes: Routes = [
  { path: 'participants/:id', component: ParticipantComponent },
  { path: '', redirectTo: '/participants', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }