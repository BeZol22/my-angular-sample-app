import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavModule } from './nav/nav.module';
import { HomeComponent } from './pages/home/home.component';

const COMPONENTS = [AppComponent];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  NavModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  providers: [],
  bootstrap: [COMPONENTS],
})
export class AppModule {}
