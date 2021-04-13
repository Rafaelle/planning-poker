import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingSessionService {

  constructor() { }

  voting = new Subject<boolean>();
  voted = false;

  start = new Subject<boolean>();

  alreadyVoted(): Observable<boolean> {
    return this.voting.asObservable();
  }

  startVoting(): Observable<boolean> {
    return this.start.asObservable();
  }


  vote(): void{
    localStorage.setItem('voted', 'true');
    this.voted = true;
    this.voting.next(this.voted);
    this.start.next(false);
  }

  notVoted(): void {
    localStorage.removeItem('voted');
    this.voted = false;
    this.voting.next(this.voted);
    this.start.next(true);
  }








}
