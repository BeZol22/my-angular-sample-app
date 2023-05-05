import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavModule } from './nav/nav.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './state/app.reducer';
import { AuthEffects } from './auth/state/auth.effects';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

const COMPONENTS = [AppComponent];

const MATERIAL_MODULES = [MatSidenavModule];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  NavModule,
  MATERIAL_MODULES,
  StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
  }),
  EffectsModule.forRoot([AuthEffects]),
  // AuthModule.forRoot(),
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  providers: [],
  bootstrap: [COMPONENTS],
})
export class AppModule {}
