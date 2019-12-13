import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Z_HUFFMAN_ONLY } from 'zlib';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); 
  //let polly = new Hunam();
  interval;
  firstNumber = 0;
  
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.firstNumber + 1);
      this.firstNumber++;
    }, 1000)
  }

  onStopGame(){
    clearInterval(this.interval);
  }

}
