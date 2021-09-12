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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddTravelViewComponent } from './views/add-travel-view/add-travel-view.component';
import { AddTravelFormComponent } from './components/add-travel-form/add-travel-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailComponent,
    TravelListComponent,
    LoginViewComponent,
    AuthFormComponent,
    HeaderComponent,
    FooterComponent,
    AddTravelViewComponent,
    AddTravelFormComponent,
    ErrorsFormComponent
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
