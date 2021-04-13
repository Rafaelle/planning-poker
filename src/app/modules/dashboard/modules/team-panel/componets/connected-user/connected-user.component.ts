import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user';

@Component({
  selector: 'app-connected-user',
  templateUrl: './connected-user.component.html',
  styleUrls: ['./connected-user.component.sass']
})
export class ConnectedUserComponent implements OnInit {

  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
