import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(event: any) {
    const parsedNumber = parseInt(event.target.value);
    if (!isNaN(parsedNumber)) {
      this.length = parsedNumber;
      //length = 10;
    }
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    const symbols = '!@#$%^&*()';
    let validCharecters = '';
    if (this.includeLetters) {
      validCharecters += letters;
    }
    if (this.includeNumbers) {
      validCharecters += numbers;
    }
    if (this.includeSymbols) {
      validCharecters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharecters.length);
      generatedPassword += validCharecters[index];
    }

    this.password = generatedPassword;
  }
  getPassword() {
    return this.password;
  }
}
