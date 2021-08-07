import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
@Injectable({
    providedIn:'root'
})

export class HomeService{

    constructor(private httpClient:HttpClient){

    }

    getActiveProduct(){
        return this.httpClient.get(`${environment.apiUrl}product`);
    }

}

