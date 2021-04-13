import { Component, Input, OnInit } from '@angular/core';
import { VotingSessionService } from 'src/app/services/votes/voting-session/voting-session.service';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'app-user-votes',
  templateUrl: './user-votes.component.html',
  styleUrls: ['./user-votes.component.sass']
})
export class UserVotesComponent implements OnInit {
  @Input() vote!: Vote;
  constructor(private votingSessionService: VotingSessionService) { }

  ngOnInit(): void {
  }

}
