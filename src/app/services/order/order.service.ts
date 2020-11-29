import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../util/util.service';
import { Observable } from 'rxjs';
import { ORDER } from '../../constants/api.config';
import { OrderRequest } from '../../models/orderRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private utilService: UtilService) { }


  //Methods
  PlaceOrder(data: OrderRequest): Observable<any> {
    return this.http.post<any>(ORDER.PlaceOrder, JSON.stringify(data), { headers: this.utilService.jsonHeader });
  }


}
