import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { publishers } from 'src/app/shared/mock-data/publisher-list';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  defaultTikiNow='false';
  publishers=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.publishers=publishers;
  }

  addProduct(addForm): void {
    const publisher =publishers.find(ele=>ele.$key===addForm.value.publisher);
    const product=new Product({
      ...addForm.value,
      publisher:publisher?publisher.value:''
    });
    this.productService.createProduct(product);
  }
}
