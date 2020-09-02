import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  age1:number;
  age2:number;

  get sum(): number {
    return this.age1 + this.age2;
  }

  get avg(): number {
    return (this.age1 + this.age2) / 2;
  }
  
  constructor() {
    this.age1 = 0;
    this.age2 = 0;
  }
}
