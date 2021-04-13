import { Injectable } from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from 'src/app/shared/models/login-response/login-response.interface';
import { User } from 'src/app/shared/models/user/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  login(user: User): Observable<LoginResponse> | any {
    // chamada na API
    // return this.http.post(this.API_URL, user, this.httpOptions);
    // ou salvar a sala(sessão)

    // imitando chamada assincrona da API
      if (user.userName !== '') {
        return of(
          this.getData(user))
          .pipe(
            tap((response: any) => {
              this.authService.setUser(response.user);
              this.authService.setSessionToken(response.sessionToken);
            })
          );
      }
      throwError('algo deu errado');
  }


  getData(user: User): object {
    const u = {
      user: {
        userName: user.userName,
        owner: user.owner,
      },
      sessionToken: ''
    };

    if (user.owner) {
      u.sessionToken = '1234';
    }
    return u;
  }
}
