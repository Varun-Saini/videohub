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
export class VideoService {
  //private baseurl:string = constants.service_baseurl;
  //private baseurl:string = "http://dilliburfi.com/ip/minetube/api/";
  private allVideoUlr:string =  constants.allVideoUlr;
  private addVideoUrl:string =  constants.addVideoUrl;
  private oneVideoUrl:string =  constants.oneVideoUrl;
  private validVideoUrl:string =  constants.validVideoUrl;

  private onePublicVideoUrl:string =  constants.onePublicVideoUrl;
  private updateVideoUrl:string = constants.updateVideoUrl;
  private deleteVideoUrl:string =  constants.deleteVideoUrl;
  private latestVideoUlr:string =  constants.latestVideoUlr;
  private addVideoViewUlr:string =  constants.addVideoViewUlr;
  private videoViewsUlr:string =  constants.videoViewsUlr;

  private addVideoLikeUlr:string =  constants.addVideoLikeUlr;
  private videoLikeUlr:string =  constants.videoLikeUlr;

  constructor(private http:HttpClient) { }

  allVideo(){
   // let headers = new Headers({'Content-Type':'application/json'});
   // let options = new RequestOptions({headers:headers});
   // options.headers.set("Authorization",'Bearer '+localStorage.getItem('currentUser'));
  // return this.http.get(this.allChannelUlr,options)
   return this.http.get(this.allVideoUlr)
                   // .map((response:Response)=>response.json())
                   //.map(this.excractData)
                    .catch(this.errorHandler);
  }

  oneVideo(videoData){
    
    return this.http.post(this.oneVideoUrl,
                        {'row_id':videoData})
                    .catch(this.errorHandler);
  }
  onePublicVideo(videoData){
    
    return this.http.post(this.onePublicVideoUrl,
                        {'row_id':videoData})
                    .catch(this.errorHandler);
  }
  addVideo(videoData){

    return this.http.post(this.addVideoUrl,
                          JSON.stringify(videoData))
                    .catch(this.errorHandler);
  }

  updateVideo(videoData){
    
    return this.http.post(this.updateVideoUrl,
                          JSON.stringify(videoData))
                    .catch(this.errorHandler);
  }

  deleteVideo(videoData){

    return this.http.post(this.deleteVideoUrl,
                          JSON.stringify(videoData))
                    .catch(this.errorHandler);
  }

  validate_video(videoData){

    return this.http.post(this.validVideoUrl,
                          JSON.stringify(videoData))
                    .catch(this.errorHandler);
 }

latestVideo(){ 
    return this.http.get(this.latestVideoUlr)
                    .catch(this.errorHandler);
}
  
addViews(videoData){

  return this.http.post(this.addVideoViewUlr,
                        JSON.stringify(videoData))
                  .catch(this.errorHandler);
}

getViews(videoData){

  return this.http.post(this.videoViewsUlr,
                        JSON.stringify(videoData))
                  .catch(this.errorHandler);
}


addLikes(videoData){

  return this.http.post(this.addVideoLikeUlr,
                        JSON.stringify(videoData))
                  .catch(this.errorHandler);
}

getLikes(videoData){

  return this.http.post(this.videoLikeUlr,
                        JSON.stringify(videoData))
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
