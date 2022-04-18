import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeCountPipe } from './time-count.pipe';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyReposComponent } from './my-repos/my-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimeCountPipe,
    MyPortfolioComponent,
    MyReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
