import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAuthGuard } from './user-auth.guard';
import { UserService } from './services/user.service';
//import { SafePipe } from './pipes/safe.pipe';
//import { HttpModule } from '@angular/http';
import { ChannelService } from './services/channel.service';
import { VideoService } from './services/video.service';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loadingInterceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //HttpModule,
    HttpClientModule,
    ToastModule.forRoot()
  ],
  providers: [UserAuthGuard,UserService,ChannelService,VideoService,
    {provide: HTTP_INTERCEPTORS, useClass: loadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
