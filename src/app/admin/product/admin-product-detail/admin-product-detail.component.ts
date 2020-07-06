import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.scss']
})
export class AdminProductDetailComponent implements OnInit {
  
  product: Product;
  isFetching = true;

  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params.pid),
      switchMap(pid => this.productService.getProductById(pid))
    ).subscribe(product => {
      this.isFetching = false;
      this.product = product;
    });
  }

}
