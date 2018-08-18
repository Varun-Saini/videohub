import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { ApplicationPipesModule } from '../../application-pipes.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ApplicationPipesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
