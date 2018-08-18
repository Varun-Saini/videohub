import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';

import { LayoutComponent  } from './layout/layout.component';


@NgModule({
  imports: [
    CommonModule,
    FrontendRoutingModule
  ],
  declarations: [FrontendComponent,LayoutComponent]
})
export class FrontendModule { }
