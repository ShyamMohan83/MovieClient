import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveListComponent } from './move-list/move-list.component';
import { MoveConfigurationComponent  } from './move-configration/move-configuration.component';
import { MoviesListService } from './common/movies-list.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoveListComponent,
    MoveConfigurationComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[
    MoviesListService
  ],
  exports:[MoviesRoutingModule]
})
export class MoviesModule { }
