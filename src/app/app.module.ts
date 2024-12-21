import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './components/AppModule/not-found-component/not-found-component.component';
import { NavBarComponentComponent } from './components/AppModule/nav-bar-component/nav-bar-component.component';
import { FooterComponentComponent } from './components/AppModule/footer-component/footer-component.component';
import { TeamsComponentComponent } from './components/TeamModule/teams-component/teams-component.component';
import { TeamComponentComponent } from './components/TeamModule/team-component/team-component.component';
import { FormTeamComponentComponent } from './components/TeamModule/form-team-component/form-team-component.component';
import { MyTeamsComponentComponent } from './components/TeamModule/my-teams-component/my-teams-component.component';
import { ParticipantsModuleComponent } from './components/ParticipantModule/participants-module/participants-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    NavBarComponentComponent,
    FooterComponentComponent,
    TeamsComponentComponent,
    TeamComponentComponent,
    FormTeamComponentComponent,
    MyTeamsComponentComponent,
    ParticipantsModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
