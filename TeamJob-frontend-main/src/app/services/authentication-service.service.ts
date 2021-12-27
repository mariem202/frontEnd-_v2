import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private _http:HttpClient) { }
  loginUser(user:User):Observable<User>{

    return  this._http.post<User>("http://localhost:8080/log",user);
  }
  regiserUser(user:User):Observable<User>{
    return this._http.post<User>("http://localhost:8080/signup",user);
  }
  getUserByName(name:String):Observable<User>{
    return this._http.post<User>("http://localhost:8080/FindByName",name);}
}
