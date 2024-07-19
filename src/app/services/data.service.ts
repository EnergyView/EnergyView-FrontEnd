import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyConsumptionData } from '../interfaces/daily-consumption-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDailyConsumptionData(date: string): Observable<DailyConsumptionData> {
    const url = '/api/day-consumption-dashboard';
    const params = new HttpParams().set('day', date);
    return this.http.get<DailyConsumptionData>(url, { params });
  }
}
