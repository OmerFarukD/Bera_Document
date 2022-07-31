import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  filtre:string
products:Product[]
filterText:string
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe(params=>{
if (params["categoryId"]) {
  this.getAllByCategoryId(params["categoryId"])
}
else{
  this.getAll()
}
})
  }
getAll(){
return this.productService.getAll().subscribe(response=>{
  if(response.success){
    this.products=response.data
  }
})
}

getAllByCategoryId(id:number){
return this.productService.getAllByCategoryId(id).subscribe(response=>{
  if (response.success) {
    this.products=response.data
  }
})
}
}
