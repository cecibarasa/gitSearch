import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username: string;

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
  
}
