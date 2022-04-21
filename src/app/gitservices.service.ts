import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { client_id, client_secret } from './gitids';
import { Profls } from './profls';
import { Repos } from './repos';




@Injectable({
  providedIn: 'root'
})
export class GitservicesService {

  repo!:Repos;
  portofolios!:Profls;
  gitRepoName!:string;
  gitPortfolio!:any;
  gitRepos!:any;
  gitRepo!:any[];
  errorMessage!:string;

  constructor(private _http:HttpClient) { 

    this.repo = new Repos('','','',[],'');
    this.portofolios = new Profls('','',[],'');

  }

  portfolioRequest(){
    interface ApiResponse{
      gitRepoName: any;
      gitPortfolio:any;
      gitRepos:any;
      gitRepo:any[];
      errorMessage:string;
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this._http.get<ApiResponse>(environment.myApi).toPromise().then(response=>{

        this.gitRepoName = response?.gitRepoName
        this.gitPortfolio = response?.gitPortfolio
        this.gitRepos = response?.gitRepos


        resolve()
      },
      error=>{
        this.errorMessage;

        reject(error)
      })
    })
    return promise
  }
  
  // methods for github profile

  public myProfileInfo():Observable<any>{
    let myProfileData =`https://api.github.com/users/Okellothomas`

    return this._http.get<any>(myProfileData).pipe(retry(1),

    );
  }

  public myreposInfo():Observable<any[]>{
    let myProfileData =`https://api.github.com/users/Okellothomas/repos`

    return this._http.get<any[]>(myProfileData).pipe(retry(1),
    );
  }



  public userProfileInfo(userInfo:any):Observable<any>{
    let userProfileData = `https://api.github.com/users/${userInfo}?client_id=${client_id}&client_secret=${client_secret}`;

    return this._http.get<any>(userProfileData).pipe(
      retry(1),
    );
  }

  public userReposInfo(userInfo:any):Observable<any>{
    let userProfileData = `https://api.github.com/users/${userInfo}/repos?client_id=${client_id}&client_secret=${client_secret}`;

    return this._http.get<any>(userProfileData).pipe(
      retry(1),
    );
  }

  public userReposInfos(userInfo:any):Observable<any[]>{
    let userProfileData = `https://api.github.com/users/${userInfo}/repos?client_id=${client_id}&client_secret=${client_secret}`;

    return this._http.get<any[]>(userProfileData).pipe(
      retry(1),
    );
  }

}
