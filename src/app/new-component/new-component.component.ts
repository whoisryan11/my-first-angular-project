import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }
  bind1 : string;
  bind2 : string;
  bind3 : string;
  name : string = '';
  button : string;
  ngOnInit(): void {
    this.bind1 = 'Interpolation';
    this.bind2 = 'Property Binding';
    this.bind3 = 'Event Binding';
    this.button = 'Click me!';
  }

  onClick() {
    if(this.button == 'Click me!')
      this.button = this.bind3;
    else
      this.button = 'Click me!';
  }

}
