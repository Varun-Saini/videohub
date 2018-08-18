import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackendComponent } from './backend.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { VideoManagerModule } from './video-manager/video-manager.module';
import { PlaylistModule } from './playlist/playlist.module';

const routes: Routes = [{
  path: '',
  component: BackendComponent,
  children: [{
                path: '',
                loadChildren: () => DashboardModule
              }]
},{
  path: 'video-manager',
  component: BackendComponent,
  children: [{
              path: '',
              loadChildren: () => VideoManagerModule
            }]
},{
  path: 'playlist',
  component: BackendComponent,
  children: [{
              path: '',
              loadChildren: () => PlaylistModule
            }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }

/*
,{
  path: 'video-manager',
  component: BackendComponent,
  children: [{
                path: '',
                loadChildren: () => VideoManagerModule
            }]
},{
  path: 'channel',
  component: BackendComponent,
  children: [{
                path: '',
                loadChildren: () => ChannelModule
            }]
}
*/
