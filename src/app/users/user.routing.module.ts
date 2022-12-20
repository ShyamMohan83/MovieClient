import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigUserComponent } from './config-user/config-user.component';
import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [
    {path:'userList', component:UserListComponent},
    {path:'configUser', component: ConfigUserComponent},
    {path: 'configUser/:code', component: ConfigUserComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ]
})
export class UserRouterModule {}
