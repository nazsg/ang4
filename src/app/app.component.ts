import { Component } from '@angular/core';
import { Cat } from './naz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is from the AppComponent.';

  showSecret = false;
  log = [];

  onToggleDetails() {
     this.showSecret = !this.showSecret;
     // this.log.push(this.log.length +1);
     this.log.push(new Date());
 }

}
let pet = new Cat(11,4, 'Chloie');
console.log(pet.eat());
