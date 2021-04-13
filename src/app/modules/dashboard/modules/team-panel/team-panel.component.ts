import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { VotesService } from 'src/app/services/votes/votes.service';
import { VotingSessionService } from 'src/app/services/votes/voting-session/voting-session.service';
import { User } from 'src/app/shared/models/user/user';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'app-team-panel',
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.sass']
})
export class TeamPanelComponent implements OnInit {
  usersList!: Array<User>;
  voteList!: Array<Vote>;
  hide = false;

  constructor(
    private authService: AuthService,
    private votingSessionService: VotingSessionService,
    private voteService: VotesService) { }

  ngOnInit(): void {
    this.usersList = [];
    this.usersList.push(this.authService.getUser());

    this.votingSessionService.clearAllVotes()
    .subscribe(
      // _response
      (response: any) => this.hideDiv(response),
      // _error
      (error: any) => this.onError(error)
    );

    this.votingSessionService.alreadyVoted()
    .subscribe(
      // _response
      (response: any) => {
        if (response){
          this.populateVoteList();
        }},
      // _error
      (error: any) => this.onError(error)
    );


  }

  hideDiv(hide: boolean): void{
    this.hide = hide;
  }

  onError(error: string): void {
    console.log('Algo deu errado', error);
  }

  populateVoteList(): void{
    this.voteList = [];
    console.log(this.voteService.getVotes());
    this.voteService.getVotes().map((item: Vote) => {
      this.voteList.push(item);
    });
  }
}
