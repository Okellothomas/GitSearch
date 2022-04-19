import { Component, OnInit } from '@angular/core';
import { GitservicesService } from '../gitservices.service';

@Component({
  selector: 'app-respositories',
  templateUrl: './respositories.component.html',
  styleUrls: ['./respositories.component.css']
})
export class RespositoriesComponent implements OnInit {

 // searching my porfolios.
 public gitRepoName!:string;
 public gitPortfolio!:any;
 public gitRepos!: any;
 public gitRepo!: any[];
 public errorMessage!:string;

 constructor( private gitSearch:GitservicesService) { }

 public searchRepoName(){

   // to get the github profile
   // this.githubserchSerive.userProfileInfo(this.userName).subscribe((data)=>{
   //   this.githubprofile = data;
   // },(error)=>{
   //   this.errorMessage = error;
   // });

  //  this.gitSearch.userProfileInfo(this.gitUserName).subscribe((data)=>{
  //    this.gitPortfolio = data;
  //  },(error)=>{
  //    this.errorMessage = error;
  //  });

   // to the the github repos. 
   this.gitSearch.userReposInfo(this.gitRepoName).subscribe((data)=>{
     this.gitRepo = data;
   },(error)=>{
     this.errorMessage = error;
   });
   
 }

  ngOnInit(): void {
  }

}
