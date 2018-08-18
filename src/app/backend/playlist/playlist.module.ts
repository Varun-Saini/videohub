import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PlaylistComponent,ViewComponent,AddComponent,EditComponent]
})
export class PlaylistModule { }
