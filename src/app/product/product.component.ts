import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  name = 'test123';
  products: Product[];
  productId;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {this.products = res; });
  }
}
