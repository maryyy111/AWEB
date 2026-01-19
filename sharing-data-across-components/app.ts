import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');

  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productsService: Products
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }




  public products: {
    prodID: string,
    prodName: string,
    prodDescrip: string,
    prodPrice: number
  }[] = [];

  //constructor(
  //  private _productsService: Products
  //) {}

  //ngOnInit() {
  //  this.products = this._productsService.getProducts();
  //}

}
