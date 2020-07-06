import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProduct = new Subject<Product>();
  $newProduct = this.newProduct.asObservable();

  constructor(private http: HttpClient) { }

  createProduct(product: Product) {
    return this.http.post('https://book-store-2bb87.firebaseio.com/product.json', product).pipe(
      catchError(this.handleError)
    );
    //this.newProduct.next(product);
  }
  getProducts() {
    return this.http.get('https://book-store-2bb87.firebaseio.com/product.json').pipe(
      map(data=>{
        const products: Product[]=[];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            products.push(new Product({...data[key], id:key}))
            
          }
        }
        return products;
      })
    );
  }

  updateProduct(product: Product) {
    const pid = product.id;
    delete product.id;
    return this.http.put(`https://book-store-2bb87.firebaseio.com/product/${pid}.json`, product);
  }

  deleteProduct(pid) {
    return this.http.delete(`https://book-store-2bb87.firebaseio.com/product/${pid}.json`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getProductById(pid): Observable<Product> {
    return this.http.get(`https://book-store-2bb87.firebaseio.com/product/${pid}.json`).pipe(
      map(result => ({ ...new Product(result), id: pid}))
    );
  }
}
