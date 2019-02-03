import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  login: boolean = true;
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
}
