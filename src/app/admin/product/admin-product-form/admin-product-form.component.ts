import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { publishers } from 'src/app/shared/mock-data/publisher-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  defaultTikiNow=false;
  publishers=[];
  subcription:Subscription;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.publishers=publishers;
  }

  addProduct(addForm): void {
    const publisher =publishers.find(ele=>ele.id===addForm.value.publisher);
    const product=new Product({
      ...addForm.value,
      publisher:publisher?publisher.value:''
    });
    //this.productService.createProduct(product);
    this.subcription = this.productService.createProduct(product).subscribe(result => console.log(result));
   //this.productService.createProduct(product).subscribe(result=>console.log(result));
  }


}
