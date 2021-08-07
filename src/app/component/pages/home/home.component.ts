
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { CookieService } from "ngx-cookie-service";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accessToken:string="";
  params:string = "";
  product:any = [];
  constructor(
    private router:Router,
    private authService:AuthService,
    private homeService:HomeService,
    private cookieService:CookieService) {
      
    this.params = location.hash.toString().replace("#","");
    this.accessToken = (this.params.substr(this.params.indexOf("access_token="),this.params.indexOf("&"))).replace("access_token=","");
  }

  ngOnInit(): void {
    if(this.accessToken){
      this.authService.getGoogleInfo(this.accessToken).subscribe((data)=>{
        this.login(data);
      });
    }

    this.getData();
  }

  login(data:any){
    let query = {
      email:data.email,
      image:data.picture
    }
    this.authService.login(query).subscribe((data:any)=>{
      this.cookieService.set("accessToken",data.data.accessToken,{path:'/'});
      document.body.dispatchEvent(new Event('login'));
      this.router.navigate(['/home']);
    })
  }

  getData(){
    this.homeService.getActiveProduct().subscribe(({data}:any)=>{
      console.log(data);
      this.product = data.data;
    });
  }

}
