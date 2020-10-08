import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ApiService {

    constructor(private httpClient:HttpClient) { 
        httpClient;
    }

    public getSeeds(){
        return this.httpClient.get("https://seedmate.herokuapp.com/");
    }
}
