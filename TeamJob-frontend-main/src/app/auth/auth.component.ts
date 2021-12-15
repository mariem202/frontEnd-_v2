import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { RegisterRequest } from '../Model/RegisterRequest';
import { RegisterRequestService } from '../services/register-request.service';
import {User} from "../classes/user";
import {AuthenticationServiceService} from "../services/authentication-service.service";



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent  implements OnInit {
  user = new User();
  msg='';

  constructor(private _service :AuthenticationServiceService,private  _router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this._service.loginUser(this.user).subscribe(
      data => {
        //the back response is respondin but error in parseing it in data
        console.log(data);
        console.log("response received");
        this._router.navigate(["/acceuil"])},
      error =>{

        this.msg="bad credentials, please enter valid username and password again"
        console.log("error in logging in ")
        console.log(error)}
    );

  }
  register() {
    this._service.regiserUser(this.user).subscribe(
      data => {
        console.log("registration received");
        this._router.navigate(["/acceuil"]);
      },
      error => {console.log(error) ;
        console.log("registration failed");}
    )
  }
}

