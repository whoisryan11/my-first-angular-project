import { Component, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-new-component',
  inputs: ['count'],
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})

export class NewComponentComponent implements OnInit {

  @Input() count: number;
  bind1 : string = 'Interpolation';
  bind2 : string = 'Property Binding';
  bind3 : string = 'Event Binding';
  name : string = '';
  button : string = 'Click me!';
  clicked : boolean = false;

  time = new Date();
  hour : number;
  mins : number;
  sec : number;
  apm :string;
  play = true;
  switch_pm = true;
  timer;
  data = [];  constructor() { 
    
  }


  ngOnInit(): void {
    this.hour = ((this.time.getUTCHours() > 12) ? (this.time.getUTCHours() - 12) : this.time.getUTCHours());
    this.mins = this.time.getUTCMinutes();
    this.sec = this.time.getUTCSeconds();
    this.apm = ((this.time.getUTCHours() > 12) ? "PM" : "AM");
    this.timer = setInterval(() => {
      if (this.play) {
        this.time = new Date();
        this.sec += 1;
        if(this.sec >= 60) {
          this.sec = 0;
          this.mins +=1;
        }
        if(this.mins >=  60){
          this.mins = 0;
          this.hour += 1;
        }
        if(this.hour == 12){
          if (this.switch_pm == true) {
            this.apm = ((this.apm == "AM") ? "PM" : "AM");
            this.switch_pm  = false;
          }
        } else if (this.hour == 13) {
          this.hour = 1;
          this.switch_pm = true;
        }
      }
      
    }, 1000);
    
  }

  onClick() {
    this.clicked = !this.clicked;
    if(this.button == 'Click me!')
      this.button = this.bind3;
    else
      this.button = 'Click me!';
  }

  timePause() {
    this.play = !this.play;
  }

  
}

