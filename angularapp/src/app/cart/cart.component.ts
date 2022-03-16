import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'; 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any=[];

  cartTotal = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.cartTotal = 0
      this.products.forEach((item: { quantity: number; price: number; }) => {
        this.cartTotal += (item.quantity * item.price)
    })
    })
  }

  
  inc(item: any){
    if(item.quantity!=5){
    item.quantity += 1; }
    this.cartTotal+=item.price;
  }
  dec(item: any){
    if(item.quantity!=1){
    item.quantity -= 1; }
    this.cartTotal-=item.price;

  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
