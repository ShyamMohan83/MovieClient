import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoveListComponent } from './move-list/move-list.component';
import { MoveConfigurationComponent } from './move-configration/move-configuration.component';

const moviesRoute: Routes = [
    {path: 'movieList', component:MoveListComponent},
    {path:'configMovie', component: MoveConfigurationComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(moviesRoute)
    ]
})

export class MoviesRoutingModule{}