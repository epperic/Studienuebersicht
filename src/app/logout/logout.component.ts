import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../shared/AuthentificationService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(private service: AuthentificationService, private router: Router) {
    this.service.logout();
    router.navigate(["/login"])
  }

  ngOnInit(): void { }
}
