import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-model'
})

export class Recipe {

    constructor(public name:string ,public desc:string,public imagePath:string){

    }
}
