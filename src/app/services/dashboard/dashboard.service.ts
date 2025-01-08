import { inject, Injectable } from '@angular/core';
import { ApiResponse, DateRange, ShippingListResponse } from '../../models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);

  public getShippingList(
    count: number = 10
  ): Observable<ShippingListResponse[]> {
    return this.http.get<ShippingListResponse[]>(
      `shippinglist.json?key=e06d2000&count=${count}`
    );
  }
}
