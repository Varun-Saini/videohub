import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { HttpClient } from '@angular/common/http';
import * as constants from '../helper/constants';

@Injectable()
export class UserService {

  private verifyUserUlr:string = constants.verifyUserUlr;
  private registerUserUrl:string = constants.registerUserUrl;

  constructor(private http:HttpClient) { }

  verifyUser(userData){
    //let headers = new Headers({'Content-Type':'application/json'});
   // let options = new RequestOptions({headers:headers});
    return this.http.post(this.verifyUserUlr,
                          JSON.stringify(userData))
                   // .map((response:Response)=>response.json())
                  // .map(this.excractData)
                    .catch(this.errorHandler);
  }

  registerUser(userData){
    //let headers = new Headers({'Content-Type':'application/json'});
    //let options = new RequestOptions({headers:headers});
    return this.http.post(this.registerUserUrl,
                          JSON.stringify(userData))
                   // .map((response:Response)=>response.json())
                  // .map(this.excractData)
                    .catch(this.errorHandler);
  }

  

  excractData(res:Response){
    let body = res.json();
    return body || {};
  }
  setToken(token:any){
    console.log(token);
    localStorage.setItem('currentUser',token);
    return token;
  }
  errorHandler(error:Response){
    return Observable.throw(error || 'Server Error');
  }
}
