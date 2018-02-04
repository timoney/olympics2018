import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent, canActivate: [AuthService] }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }