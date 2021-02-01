import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gocode-shop';
  onToggle() 
  {
     this.title = this.title ? ''  : "hellow heroes"
  }
}
