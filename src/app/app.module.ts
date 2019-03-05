import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import {CartComponent } from './cart/cart.component';

const routes: Routes = [
{path: 'products', component: ProductComponent},
{path: 'categories', component: CategoryComponent},
{path: '', redirectTo: 'products', pathMatch: 'full'},
{path: 'cart', component: CartComponent},
{path: 'products/:productId', component: ProductComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CategoryComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
