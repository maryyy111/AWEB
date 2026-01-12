import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
    presentDate = new Date();
    fullName = 'Mary Marionne Tingin';
    price = 20000;
    fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
    decimalNum1 = 8.7589623;
    decimalNum2 = 5.43;
    decimalNum3 = 0.245;
    decimalNum4 = 0.777;
    sentence = 'hello world!';
    object = {honey: 'dew', choco: 'mochi', nested: {abc: 25, numbers:[1,2,3,4,5]}};

}
