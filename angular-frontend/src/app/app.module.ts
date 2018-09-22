import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import {CoffeeSpecialtiesService} from './coffee-list/coffee-specialties.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginService} from './core/login/login.service';
import {LoginMaskComponent} from './login-mask/login-mask.component';
import {AppRoutingModule} from './app-routing.module';
import {AccountService} from './core/auth/account.service';
import {AuthServerProvider} from './core/auth/auth-jwt.service';
import {Principal} from './core/auth/principal.service';
import {StateStorageService} from './core/auth/state-storage.service';
import {UserRouteAccessService} from './core/auth/user-route-access-service';
import {FormsModule} from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';
import {AuthExpiredInterceptor} from './core/auth/interceptor/auth-expired.interceptor';
import {AuthInterceptor} from './core/auth/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    LoginMaskComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
  ],
  providers: [
    AuthServerProvider,
    CoffeeSpecialtiesService,
    LoginService,
    AccountService,
    Principal,
    StateStorageService,
    UserRouteAccessService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [LocalStorageService, SessionStorageService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [Injector]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
