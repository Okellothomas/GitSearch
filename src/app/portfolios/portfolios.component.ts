import { Component, Input, OnInit } from '@angular/core';
import { GitservicesService } from '../gitservices.service';
import { Profls } from '../profls';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  portofolios!:Profls;
  gitUserName!:string;
  gitPortfolio!:any;
  gitRepo!:any[];
  errorMessage!:string;


  constructor( private gitSearch:GitservicesService) { }

  public searchUserName(){


    this.gitSearch.portfolioRequest().then((data: any)=>{
      this.gitPortfolio = data;
    },(error: string)=>{
      this.errorMessage = error;
    });

    this.gitSearch.userProfileInfo(this.gitUserName).subscribe((data)=>{
      this.gitPortfolio = data;
    },(error)=>{
      this.errorMessage = error;
    });

    // this.gitSearch.userProfileInfo(this.gitUserName).subscribe((data)=>{
    //   this.gitPortfolio = data;
    // },(error)=>{
    //   this.errorMessage = error;
    // });

    
  }

  ngOnInit(): void {
  }

}
