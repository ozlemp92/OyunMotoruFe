import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  title = 'hellooooo';
  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory().subscribe(res => {this.categories = res });
  }
}
