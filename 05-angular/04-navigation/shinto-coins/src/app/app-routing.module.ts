import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { BrowseComponent } from './browse/browse.component';
import { MineComponent } from './mine/mine.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mine',
    component: MineComponent,
  },
  {
    path: 'buy',
    component: BuyComponent,
  },
  {
    path: 'sell',
    component: SellComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
