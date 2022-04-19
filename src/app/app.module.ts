import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, approutings} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeAgoPipe } from './time-count.pipe';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyReposComponent } from './my-repos/my-repos.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { RespositoriesComponent } from './respositories/respositories.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimeAgoPipe,
    MyPortfolioComponent,
    MyReposComponent,
    PortfoliosComponent,
    RespositoriesComponent,
    approutings,
    FooterComponent
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
