import {Component, ElementRef, OnInit, Renderer, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../core/login/login.service';

@Component({
  selector: 'app-login-mask',
  templateUrl: './login-mask.component.html'
})
export class LoginMaskComponent implements OnInit {

  authenticationError: boolean;
  rememberMe: boolean;

  constructor(
    private loginService: LoginService,
    private elementRef: ElementRef,
    private renderer: Renderer,
    private router: Router,
  ) {
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
