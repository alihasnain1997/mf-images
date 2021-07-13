import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NinjaComponent } from './ninja/ninja.component';
import { SamuraiComponent } from './samurai/samurai.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NinjaComponent,
    SamuraiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
