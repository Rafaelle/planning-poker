import { Component, OnInit, Input, Output  } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { VotesService } from 'src/app/services/votes/votes.service';
import { VotingSessionService } from 'src/app/services/votes/voting-session/voting-session.service';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.sass']
})
export class VotingPanelComponent implements OnInit {

  // modificar local -> colocar em variaveis -> mais correto vir do servidor
  listVotes = [1, 2, 3, 5, 8, 13];
  vote!: Vote;
  cardSelected = 0;
  cardDisabled!: boolean;

  constructor(
    private votesService: VotesService,
    private authService: AuthService,
    private votingSessionService: VotingSessionService) { }

  ngOnInit(): void {
    this.votingSessionService.startVoting().subscribe(
      // _response
      (response: any) => this.cardDisabled = response,
      // _error
      (error: any) => this.onError()
    );
  }

  cardClicked(valueEmitted: any): void {
    this.cardSelected = valueEmitted;
    this.votesService.addVote(this.authService.getUser(), this.cardSelected);
    this.votingSessionService.vote();
  }

  onError(): void {
    console.log('Algo deu errado');
  }
}
