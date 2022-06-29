import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password : string ;  //! Property
  includeLatter : boolean = false;
  includeNumber : boolean = false;
  includeSymbol : boolean = false;
  length : number = 0;

  constructor(){
    this.password = '';
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%&';
    let validChar = '';
    if(this.includeLatter){
      validChar += letters;
    }
    if(this.includeNumber){
      validChar += numbers;
    }
    if(this.includeSymbol){
      validChar += symbols;
    }
    let generatedPassword = '';
    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }

  getPassword(){
    return this.password;
  }

  onChangeLatter(){
    this.includeLatter = !this.includeLatter;
  }

  onChangeNumbers(){
    this.includeNumber = !this.includeNumber;
  }

  onChangeSymbols(){
    this.includeSymbol = !this.includeSymbol;
  }

  onChangeLength(value:string){
    if(value.length == 0){
      this.length = 0;
    }
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){  //! isNaN is a function that checks if the value is a number or not : Boolean
      this.length = parsedValue;
    }
  }
}
