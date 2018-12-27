import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentsModule } from './contents/contents.module';

import { HomeComponent } from './home/home.component';
import { Contents1Module } from './contents1/contents1.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    AppRoutingModule,
    ContentsModule,
    Contents1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
