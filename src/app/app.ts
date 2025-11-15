import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  history: string[] = [];

  calculate(op: string) {
    if (op === '/' && this.num2 == 0) {
      this.result = NaN;
      this.saveHistory(`❌ ERROR: ${this.num1} / 0`);
      return;
    }

    switch (op) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
    }

    this.saveHistory(`${this.num1} ${op} ${this.num2} = ${this.result}`);
  }

  sciOp(type: string) {
    switch (type) {
      case 'sin':
        this.result = Math.sin(this.num1);
        break;
      case 'cos':
        this.result = Math.cos(this.num1);
        break;
      case 'tan':
        this.result = Math.tan(this.num1);
        break;
      case 'sqrt':
        this.result = Math.sqrt(this.num1);
        break;
      case '%':
        this.result = this.num1 % this.num2;
        break;
      case 'pow':
        this.result = Math.pow(this.num1, 2);
        break;
      case 'log':
        this.result = Math.log(this.num1);
        break;
    }

    this.saveHistory(`${type}(${this.num1}) = ${this.result}`);
  }

  appendNumber(val: number) {
    this.num1 = Number(String(this.num1) + val);
  }

  autoCalc() {
    this.result = this.num1 + this.num2;
  }

  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }

  saveHistory(text: string) {
    this.history.unshift(text);
    if (this.history.length > 40) {
      this.history.pop();
    }
  }
}
