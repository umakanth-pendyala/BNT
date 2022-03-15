import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-adminprod',
  templateUrl: './adminprod.component.html',
  styleUrls: ['./adminprod.component.css'],
})

export class AdminprodComponent implements OnInit {
  prods: Product[] = [];

  constructor() { 
  }
  
  ngOnInit(): void {
    
  }
  deleteProd(prod: Product){
    const index = this.prods.indexOf(prod);
    this.prods.splice(index, 1);
  }
  addProd(prod: Product){
    this.prods.push(prod);
  }
  modifyProd(prod: Product){
    const index = this.prods.indexOf(prod);
    this.prods.splice(index,1);
    // this.prods.push(prod);
  }

}
