import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './pipes/safe.pipe';
import { sorthandNumber } from './pipes/sorthandNumber.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SafePipe, 
    sorthandNumber,
    TimeAgoPipe
  ],
  exports: [
    SafePipe,
    sorthandNumber,
    TimeAgoPipe
  ]
})
export class ApplicationPipesModule {}