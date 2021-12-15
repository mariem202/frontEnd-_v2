import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../Model/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class RegisterRequestService {

  constructor(private _http:HttpClient)  { }
  public Register(registerRequest:RegisterRequest):Observable<RegisterRequest>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    var Register=JSON.stringify(registerRequest)
    console.log(Register)
    return this._http.post<RegisterRequest>("http://localhost:8080/Sigin",Register,httpOptions);
  }

}
