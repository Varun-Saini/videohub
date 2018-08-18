import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControlName} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  postData:any;
  users=[];
  errorMsg:string;
  constructor(private router: Router,private _formBuilder: FormBuilder,public toastr: ToastsManager, vcr: ViewContainerRef,private _UserService:UserService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.regForm = this._formBuilder.group({
      name:[],
      username:[],
      password:[]
    });
  }

  onSubmit(){
    this.postData = this.regForm.value;
    this._UserService.registerUser(this.regForm.value)
     .subscribe(resUserData => {
                                this.users = resUserData;
                                console.log(resUserData);
                                if(resUserData.msg){
                                  if(resUserData.msg=='reg_true'){
                                  this.errorMsg='';
                                  //localStorage.setItem('currentUser',resUserData.token);
                                  //localStorage.setItem('mtdUser',resUserData.email);
                                  this.showSuccess('Redirecting...');
                                  this.regForm.reset();
                                  //this.router.navigate(['/']);
                                  setTimeout(()=>{
                                    this.router.navigate(['/']);
                                  }, 4000);
                                }else{
                                  this.errorMsg = resUserData.msg;
                                  //console.log('Invalid credentials');
                                  this.showError(this.errorMsg);
                                }
                                }else{
                                  this.errorMsg = resUserData.status;
                                  //console.log('Invalid credentials');
                                  this.showError('Somethig went wrong');
                                }
                              },
                              resUserError => {this.errorMsg = resUserError; this.toastr.error(this.errorMsg, 'Oops!');}   );
  }

  showSuccess(msg) {
    this.toastr.success(msg, 'Success!');
  }
 
  showError(msg) {
    this.toastr.error(msg, 'Oops!');
  }
 
  showWarning(msg) {
   this.toastr.warning(msg, 'Alert!');
 }
 
 showInfo(msg) {
   this.toastr.info(msg);
 }
 
 showCustom(msg) {
   this.toastr.custom('<span style="color: red">'+msg+'</span>', null, {enableHTML: true});
 }

}
