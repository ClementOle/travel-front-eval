import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailComponent,
    TravelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
