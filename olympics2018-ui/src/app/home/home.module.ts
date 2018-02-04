import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, MatTableModule, MatCardModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
