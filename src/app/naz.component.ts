import {Component} from '@angular/core';

export class Cat {
   age: number;
   name: string;
   meal: number;

   constructor(age, meal, name) {
      this.age = age;
      this.meal = meal;
      this.name = name;
   }

   eat() {
      return 'Her name is ' + this.name + ' and she eats ' + this.meal + ' times a day. She is ' + this.age + ' ' + this.years() + ' old.';
   }

   years() {
      return this.age > 1 ? 'years' : 'year';
   }
}



// let myString: string;
// myString = 'Chloie';
// document.write(myString);
