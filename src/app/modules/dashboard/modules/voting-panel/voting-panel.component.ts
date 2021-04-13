import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { VotesService } from 'src/app/services/votes/votes.service';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.sass']
})
export class VotingPanelComponent implements OnInit {

  listVotes = [1, 2, 3, 5, 8, 13];
  vote!: Vote;
  cardSelected = 0;

  constructor(
    private votesService: VotesService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.vote = this.votesService.getVotes();
  }

  cardClicked(valueEmitted: any): void {
    //this.authService.getUser();
    this.votesService.addVote(this.authService.getUser(),this.cardSelected)
    this.cardSelected = valueEmitted;
    // quando tiver a sessão incrementar o valor de votingTotal
  }
}
