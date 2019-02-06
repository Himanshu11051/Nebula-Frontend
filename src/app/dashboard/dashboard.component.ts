import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentStep = 1;
  changeStep = function(step){
    this.currentStep = step;
  };
  previousStep = function(){
    this.currentStep--;
  };
  nextStep = function(){
    this.currentStep++;
  };
  finish = function(){

  };
  uploadFile =  function(){

  };
  downloadJsFile = function(){

  };
  downloadWpPlugin = function(){

  };
}
