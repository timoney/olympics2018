import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { WelcomeModule } from './welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { EventsModule } from './events/events.module';
import { PageNotFoundModule} from './page-not-found/page-not-found.module';

import { EventService } from './services/event.service'
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    HttpModule,
    BrowserModule,
    WelcomeModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    EventsModule,
    PageNotFoundModule,
    AppRoutingModule
  ],
  providers: [EventService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
