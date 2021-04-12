import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/shared/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  registrate(user: User): any{
    console.log('Usuário registrado', user);
    // chamada na API
    // return this.http.post(this.API_URL, user, this.httpOptions);

      // imitando chamada assincrona da API

    if (user.userName !== '') {
      if (user.owner) {
        return of({
          user: {
            userName: user.userName,
            owner: user.owner,
          },
          sessionToken: '1234'
        });
      } else {
        return of({
          user: {
            userName: user.userName,
            owner: user.owner,
          },
          sessionToken: ''
        });
      }
    }
    throwError('algo deu errado');
  }
}
