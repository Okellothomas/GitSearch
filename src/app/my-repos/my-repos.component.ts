import { Component, OnInit } from '@angular/core';
import { GitservicesService } from '../gitservices.service';

@Component({
  selector: 'app-my-repos',
  templateUrl: './my-repos.component.html',
  styleUrls: ['./my-repos.component.css']
})
export class MyReposComponent implements OnInit {

  public userName!:string;
  public githubprofile!:any;
  public githubrepos!: any[];
  public errorMessage!:string;

  constructor(private myGitSearch:GitservicesService) { 
    this.userName = 'Okellothomas'
  }

  public searchName(){

    // to get the github profile
    // this.githubserchSerive.userProfileInfo(this.userName).subscribe((data)=>{
    //   this.githubprofile = data;
    // },(error)=>{
    //   this.errorMessage = error;
    // });

    this.myGitSearch.myProfileInfo().subscribe((data)=>{
      this.githubprofile = data;
    },(error)=>{
      this.errorMessage = error;
    });

    // to the the github repos. 
    this.myGitSearch.myreposInfo().subscribe((data)=>{
      this.githubrepos= data;
    },(error)=>{
      this.errorMessage = error;
    });
    
  }


  ngOnInit(): void {
  }

}
