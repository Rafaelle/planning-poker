import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() user!: User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getUser() ? this.user = new User(this.authService.getUser()) : this.user = new User();
  }

  logout(): void{
    this.authService.logout();
  }

}
