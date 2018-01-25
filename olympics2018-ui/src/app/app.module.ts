import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EventsModule } from './events/events.module';
//import { EventParticipantsModule } from './event-participants/event-participants.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule} from './page-not-found/page-not-found.module';
import { RegisterModule } from './register/register.module';

import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    HttpModule,
    BrowserModule,
    FormsModule,
    EventsModule,
    HomeModule,
    LoginModule,
    PageNotFoundModule,
    RegisterModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
