import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { CLIENT_ID, CLIENT_SECRET } from './gitids';

@Injectable({
  providedIn: 'root'
})
export class GitservicesService {

  constructor(private _http:HttpClient) { }
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
    let userProfileData = `https://api.github.com/users/${userInfo}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return this._http.get<any>(userProfileData).pipe(
      retry(1),
    );
  }

  public userReposInfo(userInfo:any):Observable<any[]>{
    let userProfileData = `https://api.github.com/users/${userInfo}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return this._http.get<any[]>(userProfileData).pipe(
      retry(1),
    );
  }

}
