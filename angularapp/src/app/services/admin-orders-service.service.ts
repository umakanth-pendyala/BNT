import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersServiceService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get("../assets/Orders.json");
  }
}
