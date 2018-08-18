import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../services/video.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  videoid: string;
  ulr:any;
  videoUrl:any;
  private sub: any;
  videos = [] ;
  preview:boolean = true;
  preview_vid:string;
  ytid:string; 
  iframe:any;
  errorMsg: string;
  res: any;
  watching_video = [];
  liked:boolean = false;

  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute,private _route: Router,private _VideoService:VideoService,
    public toastr: ToastsManager,vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.videoid = params['videoid']; // (+) converts string 'id' to a number
      
      // In a real app: dispatch action to load the details here.
      
      let pre_url = 'http://www.youtube.com/v/';
      
      let post_url = '?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=1';
     
      this._VideoService.onePublicVideo(this.videoid)
      .subscribe(resData => { if(resData.msg){
                                  if(resData.msg !='empty'){
                                    this.ytid =  resData.data[0].video_id;
                                    this.watching_video = resData.data[0]; 
                                    this.ulr = pre_url+this.ytid+post_url;
                                    if(resData.data[0].is_liked != 0){
                                      this.liked = true;
                                    }
                                   
                                    this.preview_vid = `<div class="overlay">
                                    <a  href="javascript:void(0)"><img style="width:100%" class="img-fluid thumbnail" src="http://img.youtube.com/vi/`+ this.ytid+`/maxresdefault.jpg"></a>
                  
                                    <a  href="javascript:void(0)"  class="playWrapper2"></a>
                                  </div>`;
                                  
                                  }else{ this.toastr.error('Invalid video', 'Oops!');}
                                }else{ this.toastr.error('Somethig went wrong', 'Oops!');}
                              },
                resError => { this.toastr.error('Sover error occure', 'Oops!');}  ); 
     
      });
      
   this.get_latest_videos();
   
  }

  watchanothervideo(vid){
    //this._route.navigate(['/watch', { videoid: vid}]);
    this._route.navigate(['/watch/'+vid]);
    location.reload();
    //this.videoid = vid;
    //this.ulr = 'http://www.youtube.com/v/'+this.videoid+'?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=0';

  }

  watchavideo(){
    
    this.preview = false;
    let bodyData = {"viewed_video":this.videoid};    
      this._VideoService.addViews(bodyData)
      .subscribe(resData => { this.res = resData;
                                 if(resData.msg){
                                   if(resData.msg=='create_true'){
                                     //this.toastr.success('video deleted', 'Success!');                                 
                                   }else{
                                     this.errorMsg = resData.msg;
                                     this.toastr.error(this.errorMsg, 'Oops!');
                                   }
                                 }else{
                                   this.errorMsg = resData.status;
                                   this.toastr.error('Somethig went wrong', 'Oops!');
                                 }
                               },
                resError => {this.errorMsg = resError; 
                  this.toastr.error('Server error occure', 'Oops!');
                }); 
  }

  likevideo(){
    
    this.liked = true;
    let bodyData = {"liked_video":this.videoid};    
      this._VideoService.addLikes(bodyData)
      .subscribe(resData => { this.res = resData;
                                 if(resData.msg){
                                   if(resData.msg=='create_true'){
                                     this.toastr.success('video liked', 'Success!');                                 
                                   }else{
                                     this.errorMsg = resData.msg;
                                     this.toastr.error(this.errorMsg, 'Oops!');
                                   }
                                 }else{
                                   this.errorMsg = resData.status;
                                   this.toastr.error('Somethig went wrong', 'Oops!');
                                 }
                               },
                resError => {this.errorMsg = resError; 
                  this.toastr.error('Server error occure', 'Oops!');
                }); 
  }

  get_latest_videos(){
    this._VideoService.latestVideo()
    .subscribe(resResData => { this.videos = resResData.data;},
              resResError => {this.toastr.error('Server error occure', 'Oops!');}   );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
