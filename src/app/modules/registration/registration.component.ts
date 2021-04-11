import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from './../../shared/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})

export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void{
    this.createForm(new User());
  }

  createForm(user: User): void {
    this.registrationForm = this.formBuilder.group({
      userName: [user.userName, [Validators.required, Validators.minLength(3)]],
      owner: [user.owner],
    });
  }

  salvar(): void {
    console.log(this.registrationForm.value);
  }
}
