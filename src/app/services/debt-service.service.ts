import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Debt } from '../models/debt';


@Injectable({
  providedIn: 'root'
})
export class DebtServiceService {
  debts: Array<Debt> = [];
  debtSubject: BehaviorSubject<Array<Debt>>


  constructor(private httpClient: HttpClient) { }

  //POST add new debt
  addDebt(newDebt: Debt): Observable<Debt> {
    return this.httpClient.post<Debt>('http://localhost:9009/debt/saveDebt', newDebt).pipe(
      tap((debt) => {
        console.log('got response', debt);
        this.debts.push(debt);
        this.debtSubject.next(this.debts)
      })
    );
  }

  //GET all Debts
  getAllDebts(): Observable<Debt[]> {
    console.log("get all Debt called")
    return this.httpClient.get<Debt[]>("http://localhost:9009/debt/all")
  }


  //GET debt by user ID
  GetDebtByUserId(userId: number): Observable<any> {
    return this.httpClient.get(`http://localhost:9009/debt/getdebt/${userId}`)
  }



  viewAllDebts(): Observable<Array<Debt>> {
    console.log("view all debt called");
    return this.debtSubject;
  }


  //DELETE
  deleteOrder(id): Observable<any> {
    console.log("deleteservice")
    return this.httpClient.delete(`http://localhost:9009/debt/delete/${id}`)
      .pipe(tap((id) => {
        let indx = this.debts.findIndex((order) => order.debtId === id);
        this.debts.splice(indx, 1);
        this.debtSubject.next(this.debts);
      }));
  }

  //PUT (updateOrder)
  updateDebt(updateDebt: Debt): Observable<any> {
    return this.httpClient.put(
      'http://localhost:9009/debt/update',
      updateDebt
    );
  }
}
