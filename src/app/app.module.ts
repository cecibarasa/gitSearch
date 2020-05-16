import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { NgProgressModule } from '@ngx-progressbar/core';
//import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { ProfileService } from "./profile.service";
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    NavBarComponent,
    RepositoriesComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgProgressModule.forRoot(),,
    /////NgProgressHttpClientModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
