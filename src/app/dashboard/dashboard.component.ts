import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  currentStep = 1;
  changeStep = function (step) {
    this.currentStep = step;
  };
  previousStep = function () {
    this.currentStep--;
  };
  nextStep = function () {
    this.currentStep++;

  };
  finish = function () {

  };
  uploadFile = function () {

  };
  setKB = function () {
    var urlObj = {
      url: "https://docs.microsoft.com/azure/cognitive-services/Emotion/FAQ",
      name: "TestKB"
    }
    this.httpClient.post("https://nebula-bot.azurewebsites.net/api/updateKB", urlObj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
      })
    }).subscribe((res) => {
      console.log(res);
    });
  };
  downloadJsFile = function () {

    this.httpClient.get("https://volafile.org/get/B7AyrJ6YXwjZA/nebula-bot.js").subscribe((res) => {
      console.log(res);
    });
  };
  downloadWpPlugin = function () {

  };



}
