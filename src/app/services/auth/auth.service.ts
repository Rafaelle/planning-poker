import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: User;
  sessionToken!: string;

  constructor() {
  }

  setUser(user: User): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user) );
  }

  getUser(): any{
    if (this.currentUser) {
      return this.currentUser;
    }
    const userSaved = localStorage.getItem('user');
    if (userSaved){
      this.currentUser = new User(JSON.parse(userSaved));
      return this.currentUser;
    }
    return null;
  }

  setSessionToken(sessionToken: string): void {
    this.sessionToken = sessionToken;
    localStorage.setItem('sessionToken', sessionToken);
  }

  getSessionToken(): any{
    if (this.sessionToken) {
      return this.sessionToken;
    }
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken){
      this.sessionToken = sessionToken;
      return this.sessionToken;
    }
    return null;
  }

  registered(): boolean {
    return this.getUser() ? true : false;
  }
}
