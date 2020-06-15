import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './AuthentificationService';


@Injectable()
export class RouteGuard implements CanActivate {
    constructor(
        private service: AuthentificationService,
        private router: Router) { }

    canActivate() {
        if (this.service.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}