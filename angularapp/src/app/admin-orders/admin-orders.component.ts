import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/Order';
import { AdminOrdersServiceService } from '../services/admin-orders-service.service';
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  order !: Order[];
  searchValue !: string;
  p: number = 1;
  constructor(private adminOrderService : AdminOrdersServiceService) { }
  key : string = 'id';
  reverse : boolean = false;
  ngOnInit(): void {
  this.adminOrderService.getOrders().subscribe((result : any) => {
    this.order = result;
  });
  
  
  }


  sort(key : any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
