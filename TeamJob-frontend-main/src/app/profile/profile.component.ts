import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  e : string; 
  user = new User();
  constructor(private _service :AuthenticationServiceService, private _route : Router) { }

  ngOnInit(): void {
    /*  localStorage.setItem("FirstName","local -mimi");
      sessionStorage.setItem("Session ","Session- mimi");*/
       this.e=sessionStorage.getItem("name");
       this._service.getUserByName(this.e).subscribe(
         data => {
           error => console.log("data recieved");
           this.user=data;
         },
         error => {console.log("exception occured");}
       )
     }

}
