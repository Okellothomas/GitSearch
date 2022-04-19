import { Component, OnInit } from '@angular/core';
import { GitservicesService } from '../gitservices.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  // searching my porfolios.
  public gitUserName!:string;
  public gitPortfolio!:any;
  public gitRepo!: any[];
  public errorMessage!:string;

  constructor( private gitSearch:GitservicesService) { }

  public searchUserName(){


    this.gitSearch.userProfileInfo(this.gitUserName).subscribe((data)=>{
      this.gitPortfolio = data;
    },(error)=>{
      this.errorMessage = error;
    });

    
  }

  ngOnInit(): void {
  }

}
