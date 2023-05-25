import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss'],
})
export class DropdownSearchComponent {
  @Input() placeholder: string = '';
}
