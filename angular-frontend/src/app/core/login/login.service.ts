import { Injectable } from '@angular/core';

import { AuthServerProvider } from '../auth/auth-jwt.service';

@Injectable()
export class LoginService {
    constructor(private authServerProvider: AuthServerProvider) {}

    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(
                data => {
                        resolve(data);
                    return cb();
                },
                err => {
                    this.logout();
                    reject(err);
                    return cb(err);
                }
            );
        });
    }

    logout() {
        this.authServerProvider.logout().subscribe();
    }
}
