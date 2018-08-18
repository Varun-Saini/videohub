import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{ 
  path: '',
  component: PlaylistComponent
},{ 
  path: 'view',
  component: ViewComponent
},{ 
  path: 'add',
  component: AddComponent
},{ 
  path: 'edit/:channel_id',
  component: EditComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
