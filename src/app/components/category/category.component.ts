import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:Category[];
currentCategory:Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
getAllCategories(){
return this.categoryService.getAllCategories().subscribe(response=>{
  if (response.success) {
    this.categories=response.data;
  }
})
}
setCurrentCategory(category:Category){
  this.currentCategory=category;
  }
  getCurrentCategoryClass(category:Category){
  if(category==this.currentCategory){
  return "list-group active";
  }
  return "list-group";
  }
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
}
