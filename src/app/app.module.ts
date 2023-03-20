import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavModule } from './nav/nav.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const COMPONENTS = [AppComponent];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  NavModule,
  StoreModule.forRoot({}, {}),
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [COMPONENTS],
})
export class AppModule {}
