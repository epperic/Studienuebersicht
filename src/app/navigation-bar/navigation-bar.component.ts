import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../shared/AuthentificationService';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  is_logged_in: boolean;

  constructor(private service: AuthentificationService) {
    this.is_logged_in = this.service.isLoggedIn();
    this.service.changed.subscribe(() => {
      this.is_logged_in = this.service.isLoggedIn();
    });
  }

  ngOnInit(): void {
  }

}
