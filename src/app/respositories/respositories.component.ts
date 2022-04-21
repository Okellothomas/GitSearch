import { Component, OnInit } from '@angular/core';
import { GitservicesService } from '../gitservices.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-respositories',
  templateUrl: './respositories.component.html',
  styleUrls: ['./respositories.component.css']
})
export class RespositoriesComponent implements OnInit {
  
  repo!:Repos;
  gitRepoName!:string;
  gitPortfolio!:any;
  gitRepos!:any;
  gitRepo!:any[];
  errorMessage!:string;


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
