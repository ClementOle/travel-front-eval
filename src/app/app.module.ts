import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TravelDetailComponent} from './views/travel-detail/travel-detail.component';
import {TravelListComponent} from './views/travel-list/travel-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginViewComponent} from "./views/login-view/login-view.component";
import {AuthFormComponent} from "./components/auth-form/auth-form.component";
import {TravelService} from "./services/travel/travel.service";
import {AuthGuardService} from "./guards/auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailComponent,
    TravelListComponent,
    LoginViewComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TravelService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
