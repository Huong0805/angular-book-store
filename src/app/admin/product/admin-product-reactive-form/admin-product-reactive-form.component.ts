import { Component, OnInit } from '@angular/core';
//import { Product } from 'src/app/shared/models/product';
import { publishers } from 'src/app/shared/mock-data/publisher-list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-admin-product-reactive-form',
  templateUrl: './admin-product-reactive-form.component.html',
  styleUrls: ['./admin-product-reactive-form.component.scss']
})
export class AdminProductReactiveFormComponent implements OnInit {

  addingForm: FormGroup;

  publishers=[];
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.publishers=publishers;


    this.addingForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      publisher: this.fb.control('', Validators.required),
      imageUrl: this.fb.control('', Validators.required),
      publishedDate: this.fb.control(''),
      author: this.fb.control('', [Validators.required]),
      size: this.fb.control(''),
      finalPrice: this.fb.control('', [Validators.required]),
      pageCount: this.fb.control(''),
      regularPrice: this.fb.control('', [Validators.required]),
      isTikiNow: this.fb.control('false', [Validators.required]),

    });
  }

  submit(addingForm): void {

    //console.log(addingForm.value);
    const publisher =publishers.find(ele=>ele.$key===addingForm.value.publisher);
    const product=new Product({
      ...addingForm.value,
      publisher:publisher?publisher.value:''
    });
    this.productService.createProduct(product);
  }

}
