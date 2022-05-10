import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { PhoneComponent } from './phone/phone.component';
import { ShanikaComponent } from './shanika/shanika.component';
import { FansComponent } from './fans/fans.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BusinessComponent, PhoneComponent, ShanikaComponent, FansComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
