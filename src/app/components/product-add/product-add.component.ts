import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
productAddForm:FormGroup
  constructor(private productService:ProductService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
this.createProductAddForm()
  }
createProductAddForm(){
  this.productAddForm=this.formBuilder.group({
  productName:["",Validators.required],
  unitPrice:["",Validators.required],
  categoryId:["",Validators.required]  
  })
}
add(){
  if (this.productAddForm.valid) {
    let product:Product=Object.assign({},this.productAddForm.value)
    this.productService.add(product).subscribe(response=>{
      alert(response.message)
    },errorResponse=>{
      if(errorResponse.error.Errors.length>0){
        for (let i = 0; i <errorResponse.error.Errors.length; i++) {
          alert(errorResponse.error.Errors[i].ErrorMessage)
        }       
      } 
    })
  }
  else{
    alert("Formunuz Boş dikkat !!!")
  }
}
}
