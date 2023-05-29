import { Component } from '@angular/core';

@Component({
  selector: 'app-product-selection-menubar',
  templateUrl: './product-selection-menubar.component.html',
  styleUrls: ['./product-selection-menubar.component.scss'],
})
export class ProductSelectionMenubarComponent {
  public selectedMenu: string = '';

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }
}
