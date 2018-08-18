import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';

import { HomeModule } from './home/home.module';
import { WatchModule } from './watch/watch.module';
import { ResultsModule } from './results/results.module';
import { TrendingModule } from './trending/trending.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { HistoryModule } from './history/history.module';
import { WatchlaterModule } from './watchlater/watchlater.module';


const routes: Routes = [{
  path: '',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => HomeModule
            }]
},{
  path: 'watch/:videoid',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => WatchModule
            }]
},{
  path: 'results',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => ResultsModule
            }]
},{
  path: 'trending',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => TrendingModule
            }]
},{
  path: 'subscriptions',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => SubscriptionsModule
            }]
},{
  path: 'history',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => HistoryModule
            }]
},{
  path: 'watchlater',
  component: FrontendComponent,
  children: [{
                path: '',
                loadChildren: () => WatchlaterModule
            }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class FrontendRoutingModule { }
