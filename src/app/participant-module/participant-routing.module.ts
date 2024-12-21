import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'project-teams-app/src/app/shared/components/not-found/not-found.component';
import { FormTeamComponent } from 'project-teams-app/src/app/teams/components/form-team/form-team.component';
import { MyTeamsComponent } from 'project-teams-app/src/app/teams/components/my-teams/my-teams.component';
import { TeamsComponent } from 'project-teams-app/src/app/teams/components/teams/teams.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
