import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // fileUrl;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // const file = new File([blob], "file_name", {lastModified: 1534584790000});
    // const blob = new Blob([data], { type: 'application/octet-stream' });
    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
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
    // document.getElementById('my_iframe').src = "https://volafile.org/get/B7AyrJ6YXwjZA/nebula-bot.js";
    this.httpClient.get("https://volafile.org/get/B7AyrJ6YXwjZA/nebula-bot.js").subscribe((res)=>{
      console.log(res);
  });
  };
  downloadWpPlugin = function(){

  };

 

}
