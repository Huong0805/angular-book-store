import { Component, OnInit, Input } from '@angular/core';
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
  @Input() product:Product;

  productForm: FormGroup;

  publishers=[];
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.publishers=publishers;
  
    this.productForm = this.fb.group({
      id: this.fb.control(this.product.id, Validators.required),
      title: this.fb.control(this.product.title, Validators.required),
      //publisher: this.fb.control(this.product.publisher, [Validators.required, Validators.pattern('(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)')]),
      publisher: this.fb.control(this.product.publisher, [Validators.required]),
      imageUrl: this.fb.control(this.product.imageUrl, [Validators.required] ),
      publishedDate: this.fb.control(this.product.publishedDate),
      author: this.fb.control(this.product.author, [Validators.required]),
      size: this.fb.control(this.product.size),
      finalPrice: this.fb.control(this.product.finalPrice, [Validators.required]),
      pageCount: this.fb.control(this.product.pageCount),
      regularPrice: this.fb.control(this.product.regularPrice, [Validators.required]),
      isTikiNow: this.fb.control(this.product.isTikiNow, [Validators.required]),
    });
  }

  submit(productForm): void {

    // console.log(productForm.value);
    // const publisher =publishers.find(ele=>ele.id===productForm.value.publisher);
    // const product=new Product({
    //   ...productForm.value,
    //   publisher:publisher?publisher.value:''
    // });
    const product=new Product(this.productForm.value);
    this.productService.updateProduct(product).subscribe(result => console.log(result));
  }

}
