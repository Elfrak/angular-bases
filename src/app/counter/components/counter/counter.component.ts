import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetNumber()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;
  private inicialCounter: number = this.counter;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetNumber(): void {
    this.counter = this.inicialCounter;
  }

}
