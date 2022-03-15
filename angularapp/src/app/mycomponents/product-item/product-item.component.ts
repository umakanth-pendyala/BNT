import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { test } from '../test.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() prod!: Product;
  @Output() prodDelete: EventEmitter<Product> = new EventEmitter();
  constructor(private modifier: test) {

   }

  ngOnInit(): void {
  }

  onDelete(prod: Product){
    this.prodDelete.emit(prod);
  }

  onModify(prod: Product){
    this.modifier.test = false;
    this.modifier.update.next(false);
  }
}
