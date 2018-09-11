import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css']
})
export class UdemyComponent implements OnInit {

  showSecret=false;
  log =[];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails(){
    this.showSecret=!this.showSecret;
    this.log.push(new Date());
  }
}
