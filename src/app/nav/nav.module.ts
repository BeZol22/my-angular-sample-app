import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// ANGULAR MATERIAL MODULES
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [FooterComponent, HeaderComponent];

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

const MODULES = [CommonModule, RouterModule, MATERIAL_MODULES];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [COMPONENTS],
})
export class NavModule {}
