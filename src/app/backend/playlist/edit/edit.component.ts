import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ChannelService } from '../../../services/channel.service';
import { FormGroup, FormBuilder, Validators,FormControlName} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  channel_id:string;
  private sub: any;
  editForm: FormGroup;
  postData:any;
  channel;
  errorMsg: string;
  constructor(private route: ActivatedRoute,private _ChannelService:ChannelService,
    private _formBuilder: FormBuilder) {
    //this.route.params.subscribe( params => this.cahnnel_id = params.cahnnel_id );
    this.sub = this.route.params.subscribe(params => {
      this.channel_id = params['channel_id']; // (+) converts string 'id' to a number
    });
    this._ChannelService.oneChannel(this.channel_id)
     .subscribe(resChannelData => {
                                this.channel = resChannelData.data[0];
                                console.log(this.channel);                            
                              },
               resUserError => this.errorMsg = resUserError  );
  }

  ngOnInit() {
     //spellingmistale hai channel id me


    
     /* this.editForm = this._formBuilder.group({
        channel_id:['', Validators.required],
        channel_name:['', Validators.required],
        channel_description:['', Validators.required]
      });*/
      
      this.editForm.setValue({
        channel_id: this.channel.channel_id, 
        channel_name: this.channel.channel_name,
        channel_description: this.channel.channel_description
      });
      console.log(this.channel);

  }

  onSubmit(){
    this.postData = this.editForm.value;
    console.log(this.postData);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
