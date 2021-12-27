import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from "../classes/user";
import {Entreprise} from "../Model/Entreprise";
import {AuthenticationServiceService} from "../services/authentication-service.service";
import { EntrepriseServService } from '../services/entreprise-serv.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent  implements OnInit {
  user = new User();
  entreprise=new Entreprise();
  msg='';
  LoginEntreprise:FormGroup;
  signupFormEntreprise:FormGroup;

  constructor(private _service :AuthenticationServiceService,private  _router:Router,private fb:FormBuilder,private EntrepriseService:EntrepriseServService) {
this.signupFormEntreprise=this.fb.group(

{ emailEntreprise:['',
[Validators.required,Validators.email,
Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],

passwordEntreprise: ['',
  [Validators.required,
  Validators.maxLength(10)]
],
Name: ['',
[Validators.required,
Validators.minLength(8),
Validators.maxLength(12)]
],
ConfirmpasswordEntreprise:['',Validators.required,
Validators.minLength(8),
Validators.maxLength(12),
this.validatorConfirmedPassword('passwordEntreprise')
],
phoneNumber: ['',
[Validators.required,
Validators.maxLength(8)]

],
country: ['',
[Validators.required,
Validators.maxLength(8)]

],
EntrepriseName:['',
[Validators.required,
Validators.maxLength(8)]
],
address:['',
[Validators.required,
Validators.maxLength(8)]
],
codePostal:['',
[Validators.required,
Validators.maxLength(8)]
],


})
this.LoginEntreprise=this.fb.group(
   { emailEntreprise:['',
[Validators.required,Validators.email,
Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],

passwordEntreprise: ['',
  [Validators.required,
  Validators.minLength(8),
  Validators.maxLength(12)]
],});
  }
  validatorConfirmedPassword(fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
        if (!control.value) return null;

        return control.value == control.root.get(fieldName).value ? null : { someError: true };
    }
  }
  ngOnInit(): void {
    localStorage.setItem("FirstName","local -mimi");
    sessionStorage.setItem("Session ","Session- mimi");

  }

  login() {
    this._service.loginUser(this.user).subscribe(
      data => {
        sessionStorage.setItem('name',this.user.username);
        //the back response is respondin but error in parseing it in data
        console.log(data);
        console.log("response received");
        localStorage.setItem('isConnected', 'true');  
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


  LogEntreprise()
  {
    var Email=this.LoginEntreprise.get('emailEntreprise').value;
    var Password=this.LoginEntreprise.get('passwordEntreprise').value
  console.log(this.entreprise)
  console.log("----------------")
  console.log(this.LoginEntreprise)

this.EntrepriseService.LoginEntreprise(Email,Password).subscribe(
 ()=>{
  this._router.navigateByUrl('/profil');
 }

),(error:HttpErrorResponse)=>
  {
    if(error.status==404)
    {
     console.log("error ! ")

    }
    console.log(error.message)
  }
}




  signupEntreprise(): void{

    this.entreprise.email=this.signupFormEntreprise.get('emailEntreprise').value
    this.entreprise.password=this.signupFormEntreprise.get('passwordEntreprise').value
    this.entreprise.Name=this.signupFormEntreprise.get('Name').value
    this.entreprise.phoneNumber=this.signupFormEntreprise.get('phoneNumber').value
    this.entreprise.Country=this.signupFormEntreprise.get('country').value
    this.entreprise.entrepriseName=this.signupFormEntreprise.get('EntrepriseName').value
    this.entreprise.adress=this.signupFormEntreprise.get('address').value
    this.entreprise.postalCode=this.signupFormEntreprise.get('codePostal').value
    this.EntrepriseService.RegisterEntreprise(this.entreprise).subscribe(
      ()=>
      {
        this._router.navigateByUrl('/profil');

      }),

(error:HttpErrorResponse)=>
  {
    if(error.status==404)
    {
     console.log("error ! ")

    }
    console.log(error.message)
  }
    }






}

