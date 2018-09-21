import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CoffeeSpecialtiesService {

  private coffeeSpecialtiesUrl = environment.coffeeSpecialtiesUrl;

  constructor(private http: HttpClient) {}

  getCoffeeSpecialties(): Observable<string[]> {
    return this.http.get<string[]>(this.coffeeSpecialtiesUrl);
  }

}
