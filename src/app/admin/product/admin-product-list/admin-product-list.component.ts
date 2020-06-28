import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { products } from 'src/app/shared/mock-data/product-list';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  
  products: Product[] = [];
  selectedProduct:Product;
  isAdding = false;
  isEditting = false;
  product: Product;
  subcription:Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(result=>this.products=result );

    // this.products = products;

    // this.productService.$newProduct.subscribe(p=>{
    //   products.push(p);
    //   this.isAdding = false;
    // });
  }

  // ngOnDestroy() {
  //   if(this.subcription) {
  //     this.subcription.unsubscribe();
  //   }
  // }


  viewDetail(p:Product): void {
    this.selectedProduct=p;
  }

  viewAddForm() {
    this.isAdding=true;
  }
  editProduct(product: Product) {
    this.selectedProduct = product;
    this.isEditting = true;
  }
  deleteProduct(product: Product) {
    const res = confirm('Are you sure you want to delete?');
    if (res) {
      this.productService.deleteProduct(product.id).subscribe(result => console.log(result));
    }
  }
}
