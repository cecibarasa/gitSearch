import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from "../profile.service";
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat';

//import { ProfileRequestService } from "../profile-request.service";


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username: string;

  // newuser = new username("");
  // @Output() addUser = new EventEmitter<user>();

  // submitUser() {
  //   this.addUser.emit(this.newuser);
  // }

  constructor(public profileService: ProfileService, private http: HttpClient) { 
    // this.profileService.getProfileInfo().subscribe(profile => {
    //   console.log(profile);
      
    // })
  }
  
  ngOnInit(){
    
    this.profileService.getProfileInfo().subscribe(res => {
        this.user = res;
      })
      this.profileService.gitRepos()
      .subscribe(data => {
        this.repos = data;
      })
      
  }
  findProfile(){
    this.profileService.updateProfile(this.username)
    this.profileService.getProfileInfo().subscribe(res => {
      this.user = res;
    })
    this.profileService.gitRepos()
    .subscribe(data => {
      this.repos = data;
    })
  }
  
}
