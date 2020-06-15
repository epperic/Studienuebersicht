import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthentificationService {
    @Output() changed = new EventEmitter
    private current_user = null;

    constructor(private service: AngularFireAuth) { }

    async login(email: string, password: string) {
        try {
            let result = await this.service.signInWithEmailAndPassword(email, password);
            this.current_user = result.user;
            this.changed.emit();
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    logout() {
        this.current_user = null;
        this.changed.emit();
    }

    isLoggedIn() {
        return this.current_user != null;
    }
}