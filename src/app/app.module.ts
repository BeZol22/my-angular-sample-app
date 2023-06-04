import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { NavModule } from './nav/nav.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './state/app.reducer';
import { AuthEffects } from './auth/state/auth.effects';
import { SearchEffects } from './state/search.effects';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

// Services
import { TokenInterceptor } from './auth/services/token.interceptor';

// Components
import { HomeComponent } from './pages/home/home.component';
import { ProductSelectionMenubarComponent } from './components/product-selection-menubar/product-selection-menubar.component';
import { DropdownSearchComponent } from './components/dropdown-search/dropdown-search.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  AppComponent,
  HomeComponent,
  ProductSelectionMenubarComponent,
  DropdownSearchComponent,
];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatDividerModule,
  MatSelectModule,
];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  NavModule,
  FormsModule,
  ReactiveFormsModule,
  MATERIAL_MODULES,
  StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
  }),
  EffectsModule.forRoot([AuthEffects, SearchEffects]),
  // AuthModule.forRoot(),
  StoreDevtoolsModule.instrument({
    serialize: true,
    maxAge: 25,
    logOnly: environment.production,
  }),
];

@NgModule({
  declarations: [COMPONENTS, SearchResultsComponent],
  imports: [MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
