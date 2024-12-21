import { Component } from '@angular/core';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent {
  teamName: string = '';
  teamDescription: string = '';

  onSubmit() {
    // Logic to handle form submission
    console.log('Team Name:', this.teamName);
    console.log('Team Description:', this.teamDescription);
  }
}