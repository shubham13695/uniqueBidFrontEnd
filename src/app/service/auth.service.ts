import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    constructor(private httpClient:HttpClient){

    }

    getGoogleInfo(accessToken:string){
        return this.httpClient.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`);
    }

    login(data:any){
        return this.httpClient.post(`${environment.apiUrl}user/login`,data)
    }
}