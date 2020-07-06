import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './product/admin-product-detail/admin-product-detail.component';
import { AdminProductReactiveFormComponent } from './product/admin-product-reactive-form/admin-product-reactive-form.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AdminProductListComponent
  },
  {
    path: 'product/new',
    component: AdminProductFormComponent,
    canDeactivate: []
  },
  {
    path: 'product/:pid',
    component: AdminProductDetailComponent
  },
  {
    path: 'product/:pid/edit',
    component: AdminProductReactiveFormComponent,
    canDeactivate: []
  },
  {
    path: 'orders',
    component: AdminProductFormComponent
  }
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
