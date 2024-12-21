import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { FormTeamComponent } from './components/form-team/form-team.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    FormTeamComponent,
    MyTeamsComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }