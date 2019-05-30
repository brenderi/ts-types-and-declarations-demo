import { Component, OnInit } from '@angular/core';

import { getPrimitives } from '../models/primitives';
import { getObjects } from '../models/objects';
import { getEnums } from '../models/enums';
import { getUserDefinedTypes } from '../models/userDefined';
import { getUnions } from '../models/unions';

enum Categories {
  Primitives = 'Primitives',
  Objects = 'Objects',
  Enums = 'Enums',
  UserDefinedTypes = 'User-Defined Types',
  Unions = 'Unions'
}

@Component({
  selector: 'types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  examples: Array<[string, string?]> = [];
  categoryToShow = Categories.UserDefinedTypes;

  ngOnInit() {
    this.changeOption(this.categoryToShow);
  }

  changeOption(category: Categories) {
    this.examples = [];
    let data: any;
    switch (category) {
      case Categories.Primitives:
        data = getPrimitives();
        break;
      case Categories.Objects:
        data = getObjects();
        break;
      case Categories.Enums:
        data = getEnums();
        break;
      case Categories.UserDefinedTypes:
        data = getUserDefinedTypes();
        break;
      case Categories.Unions:
        data = getUnions();
        break;
    }

    if (data) {
      data.map(t => this.examples.push([String(t), typeof t]));
    }
  }
}
