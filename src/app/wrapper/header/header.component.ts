import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  constructor(
    private cookieService:CookieService
  ) { 
    this.registerAllEvents();
  }

  ngOnInit(): void {
    let token = this.cookieService.get('accessToken');
    if(token){
      this.isLoggedIn = true;
    }  
  }


  registerAllEvents(){

    document.body.addEventListener('login',()=>{
      this.isLoggedIn = true;
    });

    document.body.addEventListener('logout',()=>{
      this.isLoggedIn = false;
    });

  }

  logout(){
    this.cookieService.delete("accessToken","/");
    document.body.dispatchEvent(new Event('logout'));
  }

}
