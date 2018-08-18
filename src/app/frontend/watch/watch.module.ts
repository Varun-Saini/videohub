import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from './watch.component';

import { ApplicationPipesModule } from '../../application-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    WatchRoutingModule,
    ApplicationPipesModule
  ],
  declarations: [WatchComponent]
})
export class WatchModule { }
