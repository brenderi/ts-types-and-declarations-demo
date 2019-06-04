import { Component, OnInit } from '@angular/core';

import { getArrayDestructuring } from '../models/arrayDestructuring';
import { getObjectDestructuring } from '../models/objectDestructuring';
import { getSpread } from '../models/spread';

enum Categories {
  Var = 'var',
  Let = 'let',
  ArrayDestructuring = 'Array Destructuring',
  ObjectDestructuring = 'Object Destructuring',
  Spread = 'Spread'
}

@Component({
  selector: 'declarations',
  templateUrl: './declarations.component.html',
  styleUrls: ['./declarations.component.css']
})
export class DeclarationsComponent implements OnInit {
  examples: Array<string> = [];
  categoryToShow = Categories.Spread;

  ngOnInit() {
    this.changeOption(this.categoryToShow);
  }

  changeOption(category: Categories) {
    this.examples = [];
    let data: any;
    switch (category) {
      case Categories.Var:
        for (var i = 0; i < 5; i++) {
          this.examples.push(String(i));
          //setTimeout(() => this.examples.push(String(i)), 1000 * i);
        }
        break;
      case Categories.Let:
        for (let i = 0; i < 5; i++) {
          this.examples.push(String(i));
          //setTimeout(() => this.examples.push(String(i)), 1000 * i);
        }
        break;
      case Categories.ArrayDestructuring:
        this.examples.push(...getArrayDestructuring());
        break;
      case Categories.ObjectDestructuring:
        this.examples.push(...getObjectDestructuring());
        break;
      case Categories.Spread:
        this.examples.push(...getSpread());
        break;
    }
  }
}
