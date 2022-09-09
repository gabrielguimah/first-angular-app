import { Transference } from './../models/transference.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferencesService {

  private transferencesList: any[]
  private url = 'http://localhost:3000/transferences'

  constructor(private httpClient: HttpClient) {
    this.transferencesList = []
  }

  get transferences() {
    return this.transferencesList
  }

  allTransferences(): Observable<Transference[]>{
    return this.httpClient.get<Transference[]>(this.url)
  }

  add(transference: Transference): Observable<Transference> {
   this.hidratar(transference)
   return this.httpClient.post<Transference>(this.url, transference)
  }

  private hidratar(transference: any) {
    transference.date = new Date()
  }

}
