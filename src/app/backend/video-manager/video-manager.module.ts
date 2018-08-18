import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoManagerRoutingModule } from './video-manager-routing.module';
import { VideoManagerComponent } from './video-manager.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { SafePipe } from '../../frontend/watch/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    VideoManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VideoManagerComponent, AddComponent, EditComponent, ViewComponent]
})
export class VideoManagerModule { }
