import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RegisteredGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    ){}

  canActivate(): boolean {

    if (!this.authService.registered()){
      this.router.navigate(['']);
    }
    return this.authService.registered();
  }
}
