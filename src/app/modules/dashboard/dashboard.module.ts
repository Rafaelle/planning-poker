import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VotingPanelModule } from './modules/voting-panel/voting-panel.module';
import { TeamPanelModule } from './modules/team-panel/team-panel.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    VotingPanelModule,
    TeamPanelModule
  ],
})
export class DashboardModule { }
