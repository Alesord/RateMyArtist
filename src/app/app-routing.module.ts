import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'edicion',
    loadChildren: () => import('./pages/edicion/edicion.module').then(m => m.EdicionModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./pages/ranking/ranking.module').then(m => m.RankingModule)
  },
  {
    path: '**',
    redirectTo: 'ranking/leaderboard-ranking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
