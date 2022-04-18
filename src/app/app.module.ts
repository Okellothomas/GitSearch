import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, approutings} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeCountPipe } from './time-count.pipe';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyReposComponent } from './my-repos/my-repos.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { RespositoriesComponent } from './respositories/respositories.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimeCountPipe,
    MyPortfolioComponent,
    MyReposComponent,
    PortfoliosComponent,
    RespositoriesComponent,
    approutings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
