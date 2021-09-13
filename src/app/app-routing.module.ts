import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TravelListComponent} from "./views/travel-list/travel-list.component";
import {LoginViewComponent} from "./views/login-view/login-view.component";
import {AuthGuardService} from "./guards/auth/auth-guard.service";
import {TravelDetailComponent} from "./views/travel-detail/travel-detail.component";
import {AddTravelViewComponent} from "./views/add-travel-view/add-travel-view.component";
import {EditTravelViewComponent} from "./views/edit-travel-view/edit-travel-view.component";

const routes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: TravelListComponent},
  {path: 'travel/new', canActivate: [AuthGuardService], component: AddTravelViewComponent},
  {path: 'travel/edit/:id', canActivate: [AuthGuardService], component: EditTravelViewComponent},
  {path: 'travel/:id', canActivate: [AuthGuardService], component: TravelDetailComponent},
  {path: 'posts', canActivate: [AuthGuardService], component: TravelListComponent},
  {path: 'login', component: LoginViewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
