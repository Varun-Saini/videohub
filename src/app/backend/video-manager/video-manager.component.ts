import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControlName, FormControl} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ChannelService } from '../../services/channel.service';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-manager',
  templateUrl: './video-manager.component.html',
  styleUrls: ['./video-manager.component.css']
})
export class VideoManagerComponent implements OnInit {

  channels=[];
  videos = [] ;
  Form: FormGroup;
  res:any;
  isEditing = false;
  errorMsg: string;
  constructor(private _formBuilder: FormBuilder,public toastr: ToastsManager,
    vcr: ViewContainerRef,private _ChannelService:ChannelService,private _VideoService:VideoService) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this._ChannelService.allChannel()
     .subscribe(resChannelData => { this.channels = resChannelData.data; console.log(resChannelData);},
               resUserError =>  {this.toastr.error('Sover error occure', 'Oops!');}  ); 
      this.allvideo();
    this.Form = this._formBuilder.group({
      row_id:[''],
      video_channel:[''],
      video_title:[''],
      video_id:['', Validators.required],
      video_duration:['', Validators.required],
      video_meta:['', Validators.required] , 
      video_description:['', Validators.required],
      publish_status:[true, Validators.required] 
    });
  }

  onSubmit(videoDetail) {
    console.log(videoDetail); 
    if(videoDetail.row_id !=''){
      this._VideoService.updateVideo(videoDetail)
      .subscribe(resData => { this.res = resData;
                                if(resData.msg){
                                  if(resData.msg=='update_true'){ this.toastr.success('Video uploaded.', 'Success!');
                                    this.Form.reset(); this.allvideo();
                                    this.isEditing= false;                                  
                                  }else{ this.errorMsg = resData.msg; this.toastr.error(this.errorMsg, 'Oops!');}
                                }else{ this.errorMsg = resData.status;this.toastr.error('Somethig went wrong', 'Oops!');}
                              },
                resError => {this.errorMsg = resError; this.toastr.error('Sover error occure', 'Oops!');}  ); 
     
    }else{
      this._VideoService.addVideo(videoDetail)
      .subscribe(resData => { this.res = resData;
                                if(resData.msg){
                                  if(resData.msg=='create_true'){ this.toastr.success('Video uploaded.', 'Success!');
                                    this.Form.reset(); this.allvideo();
                                    this.isEditing= false;                                  
                                  }else{ this.errorMsg = resData.msg; this.toastr.error(this.errorMsg, 'Oops!');}
                                }else{ this.errorMsg = resData.status;this.toastr.error('Somethig went wrong', 'Oops!');}
                              },
                resError => {this.errorMsg = resError; this.toastr.error('Sover error occure', 'Oops!');}  ); 
    }
  }

  delete(videoDetail){
    if(confirm('Are you sure you want to delete this video?')){
      let bodyData = {"row_id":videoDetail.row_id};    
      this._VideoService.deleteVideo(bodyData)
      .subscribe(resChannelData => { this.res = resChannelData;
                                 if(resChannelData.msg){
                                   if(resChannelData.msg=='delete_true'){
                                     this.toastr.success('video deleted', 'Success!');
                                     this.allvideo();                                  
                                   }else{
                                     this.errorMsg = resChannelData.msg;
                                     this.toastr.error(this.errorMsg, 'Oops!');
                                   }
                                 }else{
                                   this.errorMsg = resChannelData.status;
                                   this.toastr.error('Somethig went wrong', 'Oops!');
                                 }
                               },
                resChannelError => {this.errorMsg = resChannelError; this.toastr.error('Sover error occure', 'Oops!');}  ); 
    }
  }

  validate_video(){
    let bodyData = {"video_url":"https://www.youtube.com/watch?v=1ejTKov_Sm4"};    
      this._VideoService.validate_video(bodyData)
      .subscribe(resChannelData => { this.res = resChannelData;
                                 console.log(this.res);
                               },
                resChannelError => {this.errorMsg = resChannelError; this.toastr.error('Sover error occure', 'Oops!');}  ); 
    
  }

  add(){
    this.isEditing = true;
    this.Form = this._formBuilder.group({
      row_id:[''],
      video_channel:[''],
      video_title:[''],
      video_id:['', Validators.required],
      video_duration:['', Validators.required],
      video_meta:['', Validators.required] , 
      video_description:['', Validators.required],
      publish_status:[true, Validators.required] 
    });
  }
  edit(videoDetail){
    //console.log(categoryDetail);
    let publish = false;
    this.isEditing = true;
    if(videoDetail.publish_status == 1){ publish = true;}else{ publish = false;}
    this.Form = this._formBuilder.group({
      row_id:[videoDetail.row_id],
      video_channel:[videoDetail.video_channel],
      video_title:[videoDetail.video_title],
      video_id:[videoDetail.video_id, Validators.required],
      video_duration:[videoDetail.video_duration, Validators.required],
      video_meta:[videoDetail.video_meta, Validators.required] , 
      video_description:[videoDetail.video_description, Validators.required],
      publish_status:[publish, Validators.required] 
    });
  }


  cancelEditing(){
    this.isEditing= false;
    this.Form.reset();
  }
  allvideo(){
    this._VideoService.allVideo()
     .subscribe(resResData => { this.videos = resResData.data; console.log(resResData);},
               resResError => this.errorMsg = resResError  );
  }

}
