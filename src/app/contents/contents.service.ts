import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const serverUrl: String = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(serverUrl + 'boards', httpOptions);
  }
}
