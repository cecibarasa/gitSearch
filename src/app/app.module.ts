import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { RepoComponent } from './repo/repo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    RepoComponent,
    NavBarComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
