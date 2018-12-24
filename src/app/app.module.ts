import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentsModule } from "./contents/contents.module";

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    AppRoutingModule,
    ContentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
