import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlaterComponent } from './watchlater.component';

const routes: Routes = [{ 
  path: '',
  component: WatchlaterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlaterRoutingModule { }
