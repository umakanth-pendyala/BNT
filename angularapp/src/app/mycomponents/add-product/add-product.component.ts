import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { test } from '../test.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  toggleForm: boolean;
  productName!: string;
  productPrice!: number;
  productImage!: string;
  productQuantity!: number;
  @Output() prodAdd: EventEmitter<Product> = new EventEmitter();
  @Output() prodModify: EventEmitter<Product> = new EventEmitter();

  constructor(private modifier: test) { 
    this.toggleForm = modifier.test;
    modifier.update.subscribe(modified => {this.toggleForm=modified})
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const prod = {
      productName : this.productName,
      productImage : this.productImage,
      productPrice : this.productPrice,
      productQuantity : this.productQuantity
    }
    this.prodAdd.emit(prod);

  }
  onModify(){
    const prod = {
      productName : this.productName,
      productImage : this.productImage,
      productPrice : this.productPrice,
      productQuantity : this.productQuantity
    }
    this.prodAdd.emit(prod);
  }

  close(){
    this.modifier.update.next(true);
  }

}
