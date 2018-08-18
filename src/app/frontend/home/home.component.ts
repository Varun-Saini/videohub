import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos = [] ;
  errorMsg: string;
  constructor(public toastr: ToastsManager,
    vcr: ViewContainerRef,private _VideoService:VideoService) {
      this.toastr.setRootViewContainerRef(vcr);
   }
  ngOnInit() {
    this._VideoService.latestVideo()
     .subscribe(resResData => { this.videos = resResData.data;},
               resResError => {this.toastr.error('Sover error occure', 'Oops!');}   );
  }

}
