import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPanelComponent } from './team-panel.component';
import { ConnectedUserComponent } from './componets/connected-user/connected-user.component';
import { UserVotesComponent } from './componets/user-votes/user-votes.component';



@NgModule({
  declarations: [
    TeamPanelComponent,
    ConnectedUserComponent,
    UserVotesComponent,
    ConnectedUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamPanelComponent
  ]
})
export class TeamPanelModule { }
