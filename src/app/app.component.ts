import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template : `<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nam dolores et consequatur nobis non nemo eos unde optio, esse, excepturi quidem ab adipisci rerum in, recusandae nulla autem.</p>`,
  
  // styleUrls: ['./app.component.scss']
  styles : [
    `.info{
      background-color: red;
    }`
  ]
  
})
export class AppComponent {
  title = 'basic';
}
