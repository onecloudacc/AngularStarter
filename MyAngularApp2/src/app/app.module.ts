import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PrimaryclientComponent } from './primaryclient/primaryclient.component';
import { SecondaryclientComponent } from './secondaryclient/secondaryclient.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PrimaryclientComponent,
    SecondaryclientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
