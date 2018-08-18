import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControlName} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ChannelService } from '../../../services/channel.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements  OnInit {
  addForm: FormGroup;
  postData:any;
  users=[];
  errorMsg:string;
  constructor(private router: Router,private _formBuilder: FormBuilder,public toastr: ToastsManager,
     vcr: ViewContainerRef,private _ChannelService:ChannelService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.addForm = this._formBuilder.group({
      id:['', Validators.required],
      channel_name:['', Validators.required],
      channel_description:['', Validators.required]
    });
  }

  onSubmit(){
    this.postData = this.addForm.value;
    this._ChannelService.addChannel(this.addForm.value)
     .subscribe(resChannelData => {
                                this.users = resChannelData;
                                console.log(resChannelData);
                                if(resChannelData.msg){
                                  if(resChannelData.msg=='create_true'){
                                    this.errorMsg='';
                                    //localStorage.setItem('currentUser',resUserData.token);
                                    //localStorage.setItem('mtdUser',resUserData.email);
                                    this.toastr.success('Add another channel.', 'Success!');
                                    //this.showSuccess('Add another channel.');
                                    this.addForm.reset();
                                  
                                  }else{
                                    this.errorMsg = resChannelData.msg;
                                    this.toastr.error(this.errorMsg, 'Oops!');
                                    this.showError(this.errorMsg);
                                  }
                                }else{
                                  this.errorMsg = resChannelData.status;
                                  this.toastr.error('Somethig went wrong', 'Oops!');
                                  //this.showError('Somethig went wrong');
                                }
                              },
               resUserError => this.errorMsg = resUserError  );
  }
  
  showSuccess(msg) {
    this.toastr.success(msg, 'Success!');
  }
 
  showError(msg) {
    this.toastr.error(msg, 'Oops!');
  }

}
