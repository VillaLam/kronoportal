import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ChartServiceService {
  private baseUrl = `http://localhost:9009/debt/all`;

  constructor(private http:  HttpClient) { }

  debts() { 
    const url = `${this.baseUrl}`
    return this.http.get(url).toPromise().then((data) => {
      return data
    })
  }
}


