import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  private video:any;
  ulr:any;
  constructor() { 
    this.video = {
      "row_id":"1",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=dzzE_6jpQ-I",
      "video_id":"dZ0fwJojhrs",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"170000",
      "video_likes":"20000",
      "video_meta":"Utilizing,Bootstrap,Padding,Brand",
      "video_desc":"I have a site utilizing Bootstrap but I want to override the left and right padding on just the columns ",
      "video_date":"1234567891000",
    };

  }

  ngOnInit() {
    this.ulr = 'http://www.youtube.com/v/'+this.video.video_id+'?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=0';
  }

}
