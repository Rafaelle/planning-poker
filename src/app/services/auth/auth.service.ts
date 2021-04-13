import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: User | null;
  sessionToken!: string | null;

  constructor(
    private router: Router,
  ) {
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
      this.currentUser = JSON.parse(userSaved);
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

  isLogged(): boolean {
    return this.getUser() ? true : false;
  }

  logout(): void {
    this.currentUser = null;
    this.sessionToken = null;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
