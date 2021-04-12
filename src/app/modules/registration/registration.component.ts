import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import {User} from './../../shared/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})

export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  // user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit(): void{
    // this.user = new User();
    this.createForm(new User());
  }

  createForm(user: User): void {

    this.registrationForm = this.formBuilder.group({
      userName: [user.userName, [Validators.required, Validators.minLength(3)]],
      owner: [user.owner],
    });
  }

  enter(): void {
    this.registrate(new User(this.registrationForm.value));
  }

  registrate(user: User): void {
    this.registrationService.registrate(user)
    .subscribe(
      // _response
      (response: any) => this.onSuccessRegistration(),
      // _error
      (error: any) => this.onErrorRegistration()
    );
  }

  onSuccessRegistration(): void {
    this.router.navigate(['dashboard']);
  }

  onErrorRegistration(): void {
    console.log('Algo deu errado');
  }




}
