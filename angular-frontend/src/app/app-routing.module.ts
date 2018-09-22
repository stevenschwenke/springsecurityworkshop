import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginMaskComponent} from './login-mask/login-mask.component';
import {CoffeeListComponent} from './coffee-list/coffee-list.component';

export const routes: Routes = [
  {path: '', component: CoffeeListComponent},
  {path: 'login', component: LoginMaskComponent},
  {path: '*', redirectTo: 'ideas'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {useHash: true, enableTracing: false}, )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
