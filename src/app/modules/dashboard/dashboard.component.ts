import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { VotesService } from 'src/app/services/votes/votes.service';
import { VotingSessionService } from 'src/app/services/votes/voting-session/voting-session.service';
import { User } from 'src/app/shared/models/user/user';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  votes!: Array<Vote>;
  startVotingDisable = false;
  showVotes = false;
  total = 0;
  owner = false;
  user !: User;


  constructor(
  private votesService: VotesService,
  private votingSessionService: VotingSessionService,
  private authService: AuthService  ) { }

  ngOnInit(): void {
    this.votingSessionService.alreadyVoted()
    .subscribe(
      // _response
      (response: any) => this.onStopVoting(response),
      // _error
      (error: any) => this.onErrorVote(error)
    );
    
    this.owner = (this.authService.getUser()).owner;
  }


  onStartVoting(): void{
    this.votesService.clearVotes();
    this.startVotingDisable = true;
    this.votingSessionService.notVoted();
  }

  onStopVoting(stop: boolean): void{
    this.startVotingDisable = !stop;
    this.total = this.votesService.getTotal();
    this.showVotes = stop;
  }

  onErrorVote(error: string): void {
    console.log('Algo deu errado na votação', error);
  }

  clear(): void{
    this.onStartVoting();
  }
}
