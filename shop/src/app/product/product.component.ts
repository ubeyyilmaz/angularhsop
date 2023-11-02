import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


declare let alertify: any;


@Component({
  
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService,CommonModule]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activetedRoute: ActivatedRoute
  ) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [];


  ngOnInit() {

    this.activetedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      })
    })


  }

  addToCart(product: Product) {
    alertify.success(product.name + " sepete eklendi")
  }
}


