import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchresultRoutingModule } from './searchresult-routing.module';
import { SearchresultComponent } from './searchresult.component';

@NgModule({
  declarations: [
    SearchresultComponent
  ],
  imports: [
    CommonModule,
    SearchresultRoutingModule
  ],
  entryComponents: [
    SearchresultComponent
  ]
})
export class SearchresultModule { }
