import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product:Product): void {
    this.productService.createProduct(product);
  }
}
