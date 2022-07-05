import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ExpandComponent } from './expand/expand.component';
import { ExpandEditComponent } from './expand/expand-edit/expand-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LeaderboardComponent,
    ExpandComponent,
    ExpandEditComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RankingModule { }
