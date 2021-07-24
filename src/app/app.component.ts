import { Component } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  accessToken:string="";
  params:string = "";
  constructor(private httpClient:HttpClient) {
    this.params = location.hash.toString().replace("#","");
    this.accessToken = (this.params.substr(this.params.indexOf("access_token="),this.params.indexOf("&"))).replace("access_token=","");
    if(this.accessToken){
      this.httpClient.get(` https://www.googleapis.com/oauth2/v2/userinfo?access_token=${this.accessToken}`).subscribe((data)=>{
        console.log(data);
      })
    }
  }

}
