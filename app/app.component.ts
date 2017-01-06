import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `<h1>Hello {{name}}</h1>`
})

export class AppComponent { name = 'Blueprint Explorer'; }
