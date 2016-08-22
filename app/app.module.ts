import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PolicyComponent}  from './policy.component';
import {MainTabComponent} from './maintab.component';

import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent,PolicyComponent, MainTabComponent],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }