import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { publishers } from 'src/app/shared/mock-data/publisher-list';
import { Subscription, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-product-reactive-form',
  templateUrl: './admin-product-reactive-form.component.html',
  styleUrls: ['./admin-product-reactive-form.component.scss']
})
export class AdminProductReactiveFormComponent implements OnInit {
  @Input() product:Product;

  productForm: FormGroup;

  publishers=[];
  isLoading = true;
  unsubscribeAll: Subject<any>;
  constructor (
    private productService: ProductService, 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) { }


  ngOnInit(): void {
    this.unsubscribeAll = new Subject();
    this.publishers = publishers;
    this.route.params.pipe(
      takeUntil(this.unsubscribeAll),
      map(params => params.pid),
      switchMap(pid => this.productService.getProductById(pid))
    ).subscribe(product => {
      this.isLoading = false;
      this.createReactiveForm(product);
    });
  }

  createReactiveForm(product) {
    this.productForm = this.fb.group({
      id: this.fb.control(product.id),
      title: this.fb.control(product.title, Validators.required),
      imageUrl: this.fb.control(product.imageUrl, [Validators.required, Validators.pattern('(http(s?)://).+\.(jpg|jpeg|gif|png)')]),
      author: this.fb.control(product.author, Validators.required),
      finalPrice: this.fb.control(product.finalPrice, Validators.required),
      regularPrice: this.fb.control(product.regularPrice, Validators.required),
      publisher: this.fb.control(product.publisher, Validators.required),
      publishedDate: this.fb.control(product.publishedDate),
      size: this.fb.control(product.size),
      pageCount: this.fb.control(product.pageCount),
      isTikiNow: this.fb.control(product.isTikiNow)
    });
  }

  submit(productForm): void {

    // console.log(productForm.value);
    // const publisher =publishers.find(ele=>ele.id===productForm.value.publisher);
    // const product=new Product({
    //   ...productForm.value,
    //   publisher:publisher?publisher.value:''
    // });
    // const product=new Product(this.productForm.value);
    // this.productService.updateProduct(product).subscribe(result => console.log(result));

    const product = new Product(productForm.value);
    this.productService.updateProduct(product).pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(result => this.router.navigateByUrl('/admin'));
  }

  canDeactivate() {
    if (this.productForm.dirty) {
      const res = confirm('are you sure?')
      return res;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  cancel() {
    this.location.back();
  }
}
