import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'picks/:id', component: EventsComponent, canActivate: [AuthService] }
    ])
  ],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
