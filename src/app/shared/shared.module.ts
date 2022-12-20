import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({
  declarations: [
  
    PageHeaderComponent,
       DataListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PageHeaderComponent]
})
export class SharedModule { }
