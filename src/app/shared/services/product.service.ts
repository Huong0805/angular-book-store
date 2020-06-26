import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProduct = new Subject<Product>();
  $newProduct = this.newProduct.asObservable();

  constructor(private http: HttpClient) { }

  createProduct(product: Product) {
    //return this.http.post('https://book-store-2bb87.firebaseio.com/product.json', {product});
    this.newProduct.next(product);
  }
  getProducts() {
    return this.http.get('https://book-store-2bb87.firebaseio.com/product.json').pipe(
      map(data=>{
        const products: Product[]=[];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            products.push(new Product({...data[key].product, id:key}))
            
          }
        }
        return products;
      })
    );
  }
}
