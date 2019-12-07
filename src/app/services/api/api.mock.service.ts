import { Reponse } from 'src/app/models/reponse';
import { of, Observable } from 'rxjs';

export class ApiMockService {
  public response: Reponse;

  constructor() { }

  public getName(): Observable<Reponse> {
    return of(this.response);
  }
}
