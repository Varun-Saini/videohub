import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControlName} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  postData:any;
  users=[];
  errorMsg:string;
  constructor(private router: Router,private _formBuilder: FormBuilder,public toastr: ToastsManager, vcr: ViewContainerRef,private _UserService:UserService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username:[],
      password:[]
    });
  }

  onSubmit(){
   // console.log(this.loginForm.value);
    /*this.postData = this.loginForm.value;
    if(this.postData.email == 'admin@gmail.com' && this.postData.password == '!@Admin12'){
      localStorage.setItem('mtdUser',this.postData.email);
      this.showSuccess('Redirecting...');
      setTimeout(()=>{
        this.router.navigate(['/']);
      }, 4000);
      
    }else{
      //console.log('Invalid credentials');
      this.showError('Invalid credentials');
    }*/
    this.postData = this.loginForm.value;
    this._UserService.verifyUser(this.loginForm.value)
     .subscribe(resUserData => {
                                this.users = resUserData;
                                console.log(resUserData);
                                if(resUserData.token){
                                  this.errorMsg='';
                                  localStorage.setItem('currentUser',resUserData.token);
                                  localStorage.setItem('mtdUser',resUserData.email);
                                  localStorage.setItem('mtdId',resUserData.id);
                                  this.showSuccess('Redirecting...');
                                  this.loginForm.reset();
                                  //this.router.navigate(['/']);
                                  setTimeout(()=>{
                                    this.router.navigate(['/']);
                                  }, 2000);
                                }else{
                                  this.errorMsg = resUserData.msg;
                                  //console.log('Invalid credentials');
                                  this.showError(this.errorMsg);
                                }
                              },
               resUserError => {this.errorMsg = resUserError; this.toastr.error(this.errorMsg, 'Oops!');}   );


    //this._UserService.verifyUser(this.loginForm.value)
      //  .subscribe(loingResData => {
       //   this.users = loingResData;
        //    console.log(loingResData);
             /*if(loingResData.success){
               this.errorMsg='';
              this.successMsg = loingResData.message;
              this.loginForm.reset();
              this.router.navigate(['/dashboard']);
            }else{
              this.successMsg='';
              this.errorMsg = loingResData.message;
            }*/
         // });//,
          //loingResError => this.errorMsg = loingResError  );
   // localStorage.setItem('mtdUser','Ajay');
    //this.router.navigate(['/']);
  }

  /*constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }*/
   
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
