import { Component } from '@angular/core';

enum Categories {
  Types = 'Types',
  Declarations = 'Declarations'
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  Categories = Categories;
  categoryToShow = Categories.Types;
}
