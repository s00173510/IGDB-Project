import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { AuthGuard } from '../app/services/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //authguard to prevent unauthenticated users from
  //accessing restricted routes
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'browse', component: BrowseGamesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
