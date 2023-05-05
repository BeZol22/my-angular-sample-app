import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClick = new EventEmitter<void>();
  public isConfirmationPage: boolean = false;

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token');

      // If we have a token param, we are at the confirmation page
      if (token) {
        this.isConfirmationPage = true;
      } else {
        this.isConfirmationPage = false;
      }
    });
  }

  onMenuButtonClick(): void {
    this.menuButtonClick.emit();
  }
}
