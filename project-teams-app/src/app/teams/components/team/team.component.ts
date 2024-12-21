import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamName: string;
  teamMembers: string[];

  constructor() {
    this.teamName = 'Default Team Name';
    this.teamMembers = [];
  }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  addMember(member: string): void {
    this.teamMembers.push(member);
  }

  removeMember(member: string): void {
    this.teamMembers = this.teamMembers.filter(m => m !== member);
  }
}