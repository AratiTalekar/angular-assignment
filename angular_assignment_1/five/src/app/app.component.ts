import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div style="text-align:center"> 
  <h1>
    Welcome to {{ title }}! 
  </h1>
<h2>
Here are some links to help you start: 
</h2> </div>`
,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'five';
}
