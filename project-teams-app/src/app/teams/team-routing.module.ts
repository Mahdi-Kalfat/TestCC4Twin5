import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { FormTeamComponent } from './components/form-team/form-team.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamComponent },
  { path: 'form-team', component: FormTeamComponent },
  { path: 'my-teams', component: MyTeamsComponent },
  { path: '**', redirectTo: 'teams' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }