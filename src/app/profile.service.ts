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
    this.username = "moringaschool";
    
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
   

// getProfileInfo(){
//   interface ApiResponse{
//   username: string;
    
//   }
// let promise = new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiUrl + this.username + "/repos" + "?access_token" + environment.Git_secret).toPromise().then(response=>{

//     resolve()
//     this.username
//   },
//   error=>{
//     this.username = "Never, never, never give up"
//     this.username = "Winston Churchill"

//     reject(error)
//   })
// })
// return promise
// }
}

