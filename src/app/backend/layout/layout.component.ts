import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  deviceHeight: any;
  deviceWidth: any;

  loadingRouteConfig: boolean;

  show:boolean = false;
  collapse:boolean = true;
  show_aside:boolean = true;
  constructor(private router: Router){
    this.deviceHeight = (window.screen.height); //+ "px";
    this.deviceWidth = (window.screen.width); //+ "px";
      //console.log(this.deviceHeight);
      console.log(this.deviceWidth);
    if(this.deviceWidth <= 1024){
      this.show_aside = false;
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => { 
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
        //console.log(this.loadingRouteConfig);
        //setTimeout(()=>{}, 50000);          
        
      } else if (event instanceof RouteConfigLoadEnd) {
         // setTimeout(()=>{}, 50000);
          this.loadingRouteConfig = false;
          //console.log(this.loadingRouteConfig);

      }
    });
    
  }


  toggleCollapse(e) {
    this.show = !this.show;
  }
  
  toggleAside(e) {
    this.show_aside = !this.show_aside;
    //alert(3);
  }
  toggleSearch(e) {
    this.collapse = !this.collapse;
    //alert(3);
  }

  logout(e){
    localStorage.removeItem('mtdUser');
    this.router.navigate(['/login']);
    
  }


}
