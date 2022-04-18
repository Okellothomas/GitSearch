import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { RespositoriesComponent } from './respositories/respositories.component';

const routes: Routes = [
  {path: 'portfolios', component:PortfoliosComponent},
  {path: 'repositories', component:RespositoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const approutings = [PortfoliosComponent, RespositoriesComponent];
