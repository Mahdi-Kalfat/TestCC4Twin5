import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from 'project-teams-app/src/app/teams/components/teams/teams.component';
import { FormTeamComponent } from 'project-teams-app/src/app/teams/components/form-team/form-team.component';
import { MyTeamsComponent } from 'project-teams-app/src/app/teams/components/my-teams/my-teams.component';
import { NotFoundComponent } from 'project-teams-app/src/app/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'showteams',
    pathMatch: 'full'
  },
  {
    path: 'showteams',
    loadChildren: () =>
      import('./team-module.module').then((m) => m.TeamModuleModule),
    component: TeamsComponent,
  },
  {
    path: 'addTeam',
    loadChildren: () =>
      import('./team-module.module').then((m) => m.TeamModuleModule),
    component: FormTeamComponent,
  },
  {
    path: 'showmyteams',
    loadChildren: () =>
      import('./team-module.module').then((m) => m.TeamModuleModule),
    component: MyTeamsComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {}