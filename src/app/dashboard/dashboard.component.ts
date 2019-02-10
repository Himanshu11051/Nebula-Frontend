import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from "@angular/material";
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nebula : any = {
    url: "",
    name: ""
  };

  constructor(private httpClient: HttpClient,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  loaderText : string = "We have begun setting up Knowledge base for you...";
  currentStep = 1;
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 5000,
    });
  };
  changeStep = function (step) {
    if(this.currentStep == 1 && (this.nebula.name == undefined || this.nebula.name == null || this.nebula.name == "")){
      // alert("Knowledge base name can not be blank")
      this.openSnackBar('Knowledge base name can not be blank','Got it');
      return false;
    }
    if(step != 1  && this.currentStep == 2 && (this.nebula.url == undefined || this.nebula.url == null || this.nebula.url == "")){
      // alert("Knowledge base url can not be blank")
      this.openSnackBar('Knowledge base url can not be blank','Got it');
      return false;
    }
    this.currentStep = step;
  };
  previousStep = function () {
    this.currentStep--;
  };
  nextStep = function () {
    if(this.currentStep == 1 && (this.nebula.name == undefined || this.nebula.name == null || this.nebula.name == "")){
      // alert("Knowledge base name can not be blank")
      this.openSnackBar('Knowledge base name can not be blank','Got it');
      return false;
    }
    if(this.currentStep == 2 && (this.nebula.url == undefined || this.nebula.url == null || this.nebula.url == "")){
      // alert("Knowledge base url can not be blank")
      this.openSnackBar('Knowledge base url can not be blank','Got it');
      return false;
    }
    this.currentStep++;
  };
  finish = function () {
    this.openSnackBar('Thanks for using Nebula Bot Studio. Your Bot is Read!!','Okay');
  };
  uploadFile = function () {

  };
  showLoader = function(){
    $('#myModal').modal('show');
    setTimeout(() =>{
      this.loaderText = "Your Knowledge base creation is in progress..."
    },10000)
    setTimeout(() =>{
      this.loaderText = "Your Knowledge base has been initialized..."
    },15000)
    setTimeout(() =>{
      this.loaderText = "We are extracting QnA from your FAQ page..."
    },25000)
    setTimeout(() =>{
      this.loaderText = "Publishing your Knowledge base..."
    },35000)
    setTimeout(() =>{
      this.loaderText = "It's almost done..."
    },45000)
  };
  setKB = function () {

    if(this.currentStep == 2 && (this.nebula.url == undefined || this.nebula.url == null || this.nebula.url == "")){
      // alert("Knowledge base url can not be blank")
      this.openSnackBar('Knowledge base url can not be blank','Got it');
      return false;
    }

    var urlObj = {
      url: this.nebula.url,
      name: this.nebula.name
    }
    this.showLoader();
    this.httpClient.post("https://nebula-bot.azurewebsites.net/api/updateKB", urlObj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
      })
    }).subscribe((res) => {
      console.log(res);
      if(res.statusCode == 404){
        // alert('Unable to publish your Knowledge base');
        this.openSnackBar('Unable to publish your Knowledge base','Okay');
        $('#myModal').modal('hide');
      }else{
        // alert('Your Knowledge base has been updated and publish successfully!!');
        this.loaderText = "Finally everything is done..."
        this.openSnackBar('Your Knowledge base has been created and published successfully!!','Okay');
        $('#myModal').modal('hide');
      }
    });
  };
  downloadJsFile = function () {
    this.openSnackBar('Downloading your Bot Javascript Code File','Okay');
  };
  downloadWpPlugin = function () {
    this.openSnackBar('Downloading your Bot WordPress Plugin File','Okay');
  };
}
