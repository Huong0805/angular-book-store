import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductDetailComponent } from './product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './product/admin-product-form/admin-product-form.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminProductDetailComponent, AdminProductListComponent, AdminProductFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdminProductDetailComponent,
    AdminProductListComponent,
    AdminProductFormComponent
  ]
}
)

export class AdminModule { }
