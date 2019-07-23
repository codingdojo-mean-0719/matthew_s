import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { DetailsComponent } from './products/details/details.component';
import { AllComponent } from './reviews/all/all.component';
import { AuthorComponent } from './reviews/author/author.component';
import { ReviewdetailsComponent } from './reviews/reviewdetails/reviewdetails.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent },
      { path: 'details/:id', component: DetailsComponent }]
  },
  {
    path: 'reviews', component: ReviewsComponent, children: [
      { path: 'all/:id', component: AllComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'details/:id', component: ReviewdetailsComponent }]
  },
  { path: '**', redirectTo: '/' },
  { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
