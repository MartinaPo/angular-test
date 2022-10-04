import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.product = [
      new Product("Bicchiere",  5000, 1),
      new Product("Penna",  6000 , 2),
      new Product("Frangicosta",  10000, 3),
    ];
  }

}
