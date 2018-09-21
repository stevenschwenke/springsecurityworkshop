import {Component, OnInit} from '@angular/core';
import {CoffeeSpecialtiesService} from './coffee-specialties.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html'
})
export class CoffeeListComponent implements OnInit {

  coffeeSpecialties: string[];

  constructor(private coffeeSpecialtiesService: CoffeeSpecialtiesService) {
  }

  ngOnInit() {
    this.coffeeSpecialtiesService.getCoffeeSpecialties().subscribe(data => {
      console.log(data);
      this.coffeeSpecialties = data;
    });
  }

}
