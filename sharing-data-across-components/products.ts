import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
    return[
      {
        prodID: 'P-101',
        prodName: 'Logitech Mouse',
        prodDescrip: '6 Button Mechanical Mouse',
        prodPrice: 899.00,
      },
      {
        prodID: 'P-102',
        prodName: 'JBL BT Speaker',
        prodDescrip: 'Waterproof Radio 360 Surround',
        prodPrice: 1099.00,
      },
      {
        prodID: 'P-103',
        prodName: 'Mechanical Keyboard',
        prodDescrip: 'Hot-swappable RGB Backlit',
        prodPrice: 2395.00,
      },
      {
        prodID: 'P-104',
        prodName: 'Oculus Meta',
        prodDescrip: 'All-in-one Gaming Headset',
        prodPrice: 22450.00,
      },
    ]
  }
}
