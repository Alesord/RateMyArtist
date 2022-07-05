import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandComponent } from './expand/expand.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
    { path: 'leaderboard-ranking', component: LeaderboardComponent },
    { path: 'expand-artist/:id', component: ExpandComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
