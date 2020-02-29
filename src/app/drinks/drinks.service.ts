import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { Drink } from "../shared/drink.model";

const ROOT_URL = `${environment.apiUrl}/drinks`;

@Injectable({
  providedIn: "root"
})
export class DrinksService {
  constructor(private http: HttpClient) {}

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${ROOT_URL}`);
  }

  //FETCH DRINKS DATA SORTED BY NAME
  getDrinksSorted(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${ROOT_URL}?sort=name`);
  }

  getDrink(id: string): Observable<Drink> {
    return this.http.get<Drink>(`${ROOT_URL}/${id}`);
  }

  getDrinkSlug(slug: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${ROOT_URL}/name/${slug}`);
  }

  searchDrinks(term: Observable<any>) {
    return this.http.get(`${ROOT_URL}/search?drink=${term}`);
  }
}
