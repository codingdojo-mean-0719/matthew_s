import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShintoService } from './shinto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
