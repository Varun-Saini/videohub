import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormBuilder, Validators,FormControlName, FormControl} from '@angular/forms';

@Component({
  selector: 'app-channel',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  channels=[];
  res:any;
  isEditing = false;
  Form: FormGroup;
  ListForm: FormGroup;
  errorMsg: string;
  constructor(private _ChannelService:ChannelService,private _formBuilder: FormBuilder,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) {this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() { 
    this.Form = this._formBuilder.group({
      channel_id:[''],
      channel_name:['', Validators.required],
      channel_description:['', Validators.required]
    });
    this.allchannel();
    
    
  } 

  onSubmit(channelDetail) {
    //console.log(categoryDetail);
    if(channelDetail.channel_id !=''){
      this._ChannelService.updateChannel(channelDetail)
      .subscribe(resChannelData => { this.res = resChannelData;
                                 if(resChannelData.msg){
                                   if(resChannelData.msg=='update_true'){
                                     this.toastr.success('Playlist Updated.', 'Success!');
                                     this.Form.reset();
                                     this.allchannel();
                                     this.isEditing= false;                                  
                                   }else{
                                     this.errorMsg = resChannelData.msg;
                                     this.toastr.error(this.errorMsg, 'Oops!');
                                   }
                                 }else{
                                   this.errorMsg = resChannelData.status;
                                   this.toastr.error('Somethig went wrong', 'Oops!');
                                 }
                               },
                resChannelError => {this.errorMsg = resChannelError; this.toastr.error('Sover error occure', 'Oops!');} );
    }else{
     
               this._ChannelService.addChannel(channelDetail)
               .subscribe(resChannelData => { this.res = resChannelData;
                                          if(resChannelData.msg){
                                            if(resChannelData.msg=='create_true'){
                                              this.toastr.success('Playlist created.', 'Success!');
                                              this.Form.reset();
                                              this.allchannel();
                                              this.isEditing= false;                                  
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
  add(){
    this.isEditing = true;
    this.Form = this._formBuilder.group({
      channel_id:[''],
      channel_name:['', Validators.required],
      channel_description:['', Validators.required]
    });
  }
  edit(channelDetail){
    //console.log(categoryDetail);
    this.isEditing = true;
    this.Form =  new FormGroup({
      channel_id: new FormControl(channelDetail.channel_id),
      channel_name: new FormControl(channelDetail.channel_name),
      channel_description: new FormControl(channelDetail.channel_description)
    });
  }

  delete(channelDetail){
    if(confirm('Are you sure you want to delete this Playlist?')){
      let bodyData = {"channel_id":channelDetail.channel_id};    
      this._ChannelService.deleteChannel(bodyData)
      .subscribe(resChannelData => { this.res = resChannelData;
                                 if(resChannelData.msg){
                                   if(resChannelData.msg=='delete_true'){
                                     this.toastr.success('Playlist deleted', 'Success!');
                                     this.allchannel();                                  
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

  cancelEditing(){
    this.isEditing= false;
    this.Form.reset();
  }
  allchannel(){
    this._ChannelService.allChannel()
     .subscribe(resChannelData => { this.channels = resChannelData.data; console.log(resChannelData);},
               resUserError => this.errorMsg = resUserError  );
  }

}
