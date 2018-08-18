import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlaterRoutingModule } from './watchlater-routing.module';
import { WatchlaterComponent } from './watchlater.component';

@NgModule({
  imports: [
    CommonModule,
    WatchlaterRoutingModule
  ],
  declarations: [WatchlaterComponent]
})
export class WatchlaterModule { }
