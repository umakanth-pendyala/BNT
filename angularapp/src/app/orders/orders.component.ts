import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'; 

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: any=[];
  public total!:number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.orders = res;
    })
  }

}
