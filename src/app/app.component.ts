import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-practice';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number){
    if (firedNumber % 2 === 0){
      return this.evenNumbers.push(firedNumber);
    } else {
      return this.oddNumbers.push(firedNumber);
    }
  }
}
