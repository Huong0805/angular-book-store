import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Routes, RouterModule } from '@angular/router';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'product/:pid',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
    canActivate: []
  },
  {
    path: 'shipping',
    component: ShippingFormComponent,
    canActivate: []
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
    canActivate: []
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: []
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: []
  },
  {
    path: 'my-favorites',
    component: MyFavoritesComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class StoreRoutingModule { }
