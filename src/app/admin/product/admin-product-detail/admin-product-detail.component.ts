import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.scss']
})
export class AdminProductDetailComponent implements OnInit {
  @Input() product: Product;


  
  constructor() { }

  ngOnInit(): void {
  }

}
