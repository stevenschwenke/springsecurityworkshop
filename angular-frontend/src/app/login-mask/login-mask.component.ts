import {Component, ElementRef, OnInit, Renderer, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {StateStorageService} from '../core/auth/state-storage.service';
import {LoginService} from '../core/login/login.service';

@Component({
  selector: 'app-login-mask',
  templateUrl: './login-mask.component.html',
  // ViewEncapsulation.None is needed here to hide the navbar. There is no other way because the navbar is added in the app.component.html
  encapsulation: ViewEncapsulation.None
})

export class LoginMaskComponent implements OnInit {

  authenticationError: boolean;
  rememberMe: boolean;
  credentials: any;

  constructor(
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private elementRef: ElementRef,
    private renderer: Renderer,
    private router: Router,
  ) {
    this.credentials = {};
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {

    const username = form.value.username;
    const password = form.value.password;
    const rememberMe = form.value.remember;

    this.loginService.login({username: username, password: password, rememberMe: rememberMe})
      .then(() => {
        this.authenticationError = false;

        this.router.navigate(['']);
      })
      .catch(() => {
        this.authenticationError = true;
      });

  }
}
