import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie('a test recipie', 'This is a test desc', 
    'http://www.seriouseats.com/images/2016/12/20161226-staff-picks-best-recipes-2016-chicken-with-cabbage.jpg')];

  constructor() { }

  ngOnInit() {
  }

}
