import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ConfigUserComponent } from './config-user/config-user.component';
import { UserRouterModule } from './user.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    ConfigUserComponent
  ],
  imports: [
    CommonModule,
    UserRouterModule,
    ReactiveFormsModule
  ],
  exports: [UserRouterModule]
})
export class UsersModule { }
