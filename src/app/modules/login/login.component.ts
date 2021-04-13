import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';
import {User} from '../../shared/models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void{
    // this.user = new User();
    this.createForm(new User());
  }

  createForm(user: User): void {

    this.loginForm = this.formBuilder.group({
      userName: [user.userName, [Validators.required, Validators.minLength(3)]],
      owner: [user.owner],
    });
  }

  enter(): void {
    this.login(new User(this.loginForm.value));
  }

  login(user: User): void {
    this.loginService.login(user)
    .pipe(
      take(1)
    )
    .subscribe(
      // _response
      (response: any) => this.onSuccessLogin(),
      // _error
      (error: any) => this.onErrorLogin()
    );
  }

  onSuccessLogin(): void {
    this.loginForm.reset();
    this.router.navigate(['dashboard']);
  }

  onErrorLogin(): void {
    console.log('Algo deu errado');
  }




}
