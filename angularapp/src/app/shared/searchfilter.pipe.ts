import { Pipe, PipeTransform } from '@angular/core';

import {Order} from '../shared/Order';
@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(order : Order[], searchValue : string): Order[] {
    if(!order || !searchValue) {
      return order;
    }
    return order.filter(Order => 
      Order.productName?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Order.userId?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Order.orderId?.toString().toLocaleLowerCase().includes(searchValue.toLocaleUpperCase()) ||
      Order.productName?.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Order.productPrice?.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  

}
}