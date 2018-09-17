import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("A test recipe","This is a test recipe","https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg"),
    new Recipe("A second test recipe","This is a test recipe","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7qtNCAvBLJilo9otR6O9_A9K9nFSgoSNuHjarOWkutjxByRjig")
  ];

  constructor() { }

  ngOnInit() {
  }

}
