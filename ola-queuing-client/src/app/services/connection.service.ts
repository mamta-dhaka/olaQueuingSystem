import Customer from '../models/customer.models';
import Request from '../models/request.models';
import Driver from '../models/driver.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ConnectionService {

  api_url = 'http://localhost:3000';
  customerUrl = `${this.api_url}/api/customers`;
  requestUrl = `${this.api_url}/api/request`;
  driverUrl = `${this.api_url}/api/driver`;

  constructor(
    private http: HttpClient
  ) { }


  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.customerUrl}`, customer);
  }

  createRequest(request: Request, driver?: Driver): Observable<any> {
    return this.http.post(`${this.requestUrl}`, request);
  }

  createDriver(driver: Driver): Observable<any> {
    return this.http.post(`${this.driverUrl}`, driver);
  }

  updateRequest(request: Request): Observable<any> {
    return this.http.put(this.requestUrl, request);
  }
  updateDriver(driver: Driver): Observable<any> {
    return this.http.put(this.driverUrl, driver);
  }
  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.customerUrl)
    .pipe(map(res  => {
      return res['data'].docs as Customer[];
    }));
  }

  getRequests(): Observable<Request[]> {
    return this.http.get(this.requestUrl)
      .pipe(map(res  => {
        return res['data'].docs as Request[];
      }));
  }

  getDriver(): Observable<Driver[]> {
    return this.http.get(this.driverUrl)
      .pipe(map(res  => {
        return res['data'].docs as Driver[];
      }));
  }

  deleteCustomer(id: string): any {
    const deleteUrl = `${this.customerUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
