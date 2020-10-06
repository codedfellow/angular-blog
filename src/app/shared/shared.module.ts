import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimitWordsPipePipe } from './limit-words-pipe.pipe';

@NgModule({
  declarations: [LimitWordsPipePipe],
  imports: [
    CommonModule
  ],
  exports: [
    LimitWordsPipePipe
  ]
})
export class SharedModule { }
