import { Injectable } from '@angular/core';
//import { GitsearchComponent } from "./gitsearch/gitsearch.component";
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat'; //observable
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private apiUrl: string = 'https://api.github.com/users/';
  private apiKey: string = 'environment.Git_Secret;';
  

  constructor( private http:HttpClient) { 
    console.log("iriz waririz");
    this.username = "cecibarasa";
    
  }
  
  getProfileInfo(){
    return this.http.get(environment.apiUrl + this.username + "?access_token=" + environment.Git_secret).map(result => result)
  }
  gitRepos() {
    return this.http.get(environment.apiUrl + this.username + "/repos" + "?access_token=" + environment.Git_secret).map(result => result)
  }

  updateProfile(username:string){
    this.username = username
  }
   
}
// let promise = new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//     this.quote.quote = response.quote
//     this.quote.author = response.author

//     resolve()
//   },
//   error=>{
//     this.quote.quote = "Never, never, never give up"
//     this.quote.author = "Winston Churchill"

//     reject(error)
//   })
// })
// return promise
// }
// }