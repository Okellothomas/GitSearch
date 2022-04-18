import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { RespositoriesComponent } from './respositories/respositories.component';

const routes: Routes = [
  {path: 'portfolios', component:PortfoliosComponent},
  {path: 'repositories', component:RespositoriesComponent},
  {path:  'home', component:MyPortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const approutings = [PortfoliosComponent, RespositoriesComponent];
