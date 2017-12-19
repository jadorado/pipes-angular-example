import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  text: string = "Hello World";
  array: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  number: number = 0.234;
  currency: number = 1234.5;
  heroe = {
    name: "Logan",
    key: "Wolverine",
    age: 500,
    address: {
      street: "First",
      number: "50"
    }
  };
  promiseValue = new Promise( (resolve, reject) => {
    setTimeout( () => resolve("Data!!"), 3500)
  });
  date = new Date();
  text2 = "exAmplE of teXt";
  video = "mOeSfOJrUIk";
  enable = true;
  password = "password"

}
