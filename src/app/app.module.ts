import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

// my Package created by Ramin Mehrabanian install at: https://www.npmjs.com/package/ng-skeleton-loading
import { SkeletonLoadingModule } from 'ng-skeleton-loading';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    DetailCountryComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SkeletonLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
