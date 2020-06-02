import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../shared/AuthentificationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_failed: boolean = false;
  @ViewChild('email') emailElement: ElementRef;
  @ViewChild('password') passwordElement: ElementRef;

  constructor(
    private service: AuthentificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    let email = this.emailElement.nativeElement.value;
    let password = this.passwordElement.nativeElement.value;
    let result = await this.service.login(email, password);
    if (result) {
      this.router.navigate(["/home"]);
    } else
      this.login_failed = true;
  }
}
