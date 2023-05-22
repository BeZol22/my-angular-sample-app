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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { TokenInterceptor } from './auth/services/token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { ProductSelectionMenubarComponent } from './components/product-selection-menubar/product-selection-menubar.component';
import { MatDividerModule } from '@angular/material/divider';

const COMPONENTS = [AppComponent, HomeComponent];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatDividerModule,
];

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
  declarations: [COMPONENTS, ProductSelectionMenubarComponent],
  imports: [MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [COMPONENTS],
})
export class AppModule {}
