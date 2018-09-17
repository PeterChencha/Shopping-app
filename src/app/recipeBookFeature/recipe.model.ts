import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-model'
})

export class Recipe {

    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string ,desc:string,imagePath:string){
      this.name=name;
      this.description=desc;
      this.imagePath=imagePath;
    }
}