import {Component, OnInit} from '@angular/core';
import {CoffeeSpecialtiesService} from './coffee-specialties.service';
import {LoginService} from '../core/login/login.service';
import {Router} from '@angular/router';
import {AuthServerProvider} from '../core/auth/auth-jwt.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html'
})
export class CoffeeListComponent implements OnInit {

  coffeeSpecialties: string;
  token: string;

  constructor(
    private coffeeSpecialtiesService: CoffeeSpecialtiesService,
    private loginService: LoginService,
    private authServiceProvider: AuthServerProvider,
    private router: Router) {
  }

  ngOnInit() {
    this.coffeeSpecialtiesService.getCoffeeSpecialties().subscribe(data => {
      this.coffeeSpecialties = data.join(',');
      this.token = this.authServiceProvider.getToken();
    });
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
