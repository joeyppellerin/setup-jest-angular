import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reponse } from 'src/app/models/reponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  public getName(): Observable<Reponse> {
    return this.http.get<Reponse>(`https://randomuser.me/api/`);
  }
}
