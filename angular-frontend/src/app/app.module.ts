import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import {CoffeeSpecialtiesService} from './coffee-list/coffee-specialties.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CoffeeSpecialtiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
