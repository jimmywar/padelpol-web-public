import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app-routes';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';

const routes: Routes = [
  { path: appRoutes.authModule, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: appRoutes.gamesModule, canActivate: [IsAuthenticatedGuard], loadChildren: () => import('./games/games.module').then(m => m.GamesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
