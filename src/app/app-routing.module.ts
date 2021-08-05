import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './home/category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'category', component:CategoryComponent},
  {path:'detail/:name', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
