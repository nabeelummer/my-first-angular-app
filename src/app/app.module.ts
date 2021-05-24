import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnishaComponent } from './anisha/anisha.component';
import { NasiComponent } from './nasi/nasi.component';

@NgModule({
  declarations: [
    AppComponent,
    AnishaComponent,
    NasiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
