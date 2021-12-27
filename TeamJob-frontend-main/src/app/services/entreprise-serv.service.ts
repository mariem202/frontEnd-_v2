import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../Model/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseServService {


  constructor(private _http:HttpClient)  { }
  public RegisterEntreprise(entreprise:Entreprise):Observable<Entreprise>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    var Register=JSON.stringify(entreprise)
    console.log(Register)
    return this._http.post<Entreprise>("http://localhost:8080/RegisterEntreprise",Register,httpOptions);
  }

  public LoginEntreprise(login:String,password:String):Observable<Entreprise>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    var body={login,password}
    

    return this._http.post<Entreprise>(`http://localhost:8080/LoginEntreprise/`,body,httpOptions);
  }
}
