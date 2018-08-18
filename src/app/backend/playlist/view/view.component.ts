import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  videos=[];
  ulr:any;
  constructor() { 
    this.videos = [{
      "row_id":"1",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=dzzE_6jpQ-I",
      "video_id":"dZ0fwJojhrs",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"17M",
      "video_likes":"20M",
      "video_meta":"1",
      "video_date":"1234567891000",
    },{
      "row_id":"2",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=4hK8nmvAUnA",
      "video_id":"9xVp8m0fJSg",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"17M",
      "video_likes":"20M",
      "video_meta":"1",
      "video_date":"1234567891000",
    },{
      "row_id":"3",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=xnrJAnpN-mw",
      "video_id":"2eliQ_KR8yA",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"17M",
      "video_likes":"20M",
      "video_meta":"1",
      "video_date":"1234567891000",
    },{
      "row_id":"4",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=ZNYmK19-d0U",
      "video_id":"U65TWIP3mpQ",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"17M",
      "video_likes":"20M",
      "video_meta":"1",
      "video_date":"1234567891000",
    },{
      "row_id":"5",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=wtIvu085uU0",
      "video_id":"UGkLd1pxHQ0",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"17M",
      "video_likes":"20M",
      "video_meta":"1",
      "video_date":"1234567891000",
    },{
      "row_id":"6",
      "video_title":"Lagadi Lahore Diaa",
      "video_url":"https://www.youtube.com/watch?v=oTo8hJAKjPo",
      "video_id":"zpsVpnvFfZQ",
      "video_duration":"3:20",
      "video_channel":"MUSICAL",
      "video_views":"17M",
      "video_likes":"20M",
      "video_meta":"1",
      "video_date":"1234567891000",
    }
    ];

  }

  ngOnInit() {
    //this.ulr = 'http://www.youtube.com/v/'+this.video.video_id+'?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=0';
  }

}
