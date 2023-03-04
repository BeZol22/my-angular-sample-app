import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public getCurrentYear(): string {
    const startDate: number = 2022;
    const date: number = new Date().getFullYear();

    if (date !== startDate) {
      return `${startDate}-${date}`;
    }
    return date.toString();
  }
}
