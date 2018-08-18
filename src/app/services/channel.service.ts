import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { HttpClient } from '@angular/common/http';
//import { Options } from 'selenium-webdriver/firefox';
import * as constants from '../helper/constants';

@Injectable()
export class ChannelService {
  private allChannelUlr:string = constants.allChannelUlr;
  private addChannelUrl:string = constants.addChannelUrl;
  private oneChannelUrl:string = constants.oneChannelUrl;
  private updateChannelUrl:string = constants.updateChannelUrl;
  private deleteChannelUrl:string = constants.deleteChannelUrl;

  constructor(private http:HttpClient) { }

  allChannel(){
   // let headers = new Headers({'Content-Type':'application/json'});
   // let options = new RequestOptions({headers:headers});
   // options.headers.set("Authorization",'Bearer '+localStorage.getItem('currentUser'));
  // return this.http.get(this.allChannelUlr,options)
   return this.http.get(this.allChannelUlr)
                   // .map((response:Response)=>response.json())
                   //.map(this.excractData)
                    .catch(this.errorHandler);
  }

  oneChannel(channelData){
    
    return this.http.post(this.oneChannelUrl,
                        {'channel_id':channelData})
                    .catch(this.errorHandler);
  }

  addChannel(channelData){

    return this.http.post(this.addChannelUrl,
                          JSON.stringify(channelData))
                    .catch(this.errorHandler);
  }

  updateChannel(channelData){
    
    return this.http.post(this.updateChannelUrl,
                          JSON.stringify(channelData))
                    .catch(this.errorHandler);
  }

  deleteChannel(channelData){

    return this.http.post(this.deleteChannelUrl,
                          JSON.stringify(channelData))
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
