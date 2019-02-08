import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router : Router) { }
  imports: [
    FormsModule     //Add here form  module
  ]
  ngOnInit() {
  }
  login: boolean = true;
  
    email= "";
    password= ""
  
  login_signup = function(val){
    this.login = val;
  };
  gotoDashboard = function(){
    this.router.navigateByUrl('/dashboard').then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  };
  userLogin = function(){
    localStorage.setItem("email",this.email);
    localStorage.setItem("password",this.password);
    this.gotoDashboard();
  };
}
