import { RegisterModel } from './../../models/registerModel';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
  this.createForm();
  }
createForm(){
this.registerForm=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required],
  firstname:["",Validators.required],
  lastname:["",Validators.required]
})
}

register(){
  if(this.registerForm.valid){
    let model:RegisterModel=Object.assign({},this.registerForm.value)

    this.authService.register(model).subscribe(response=>{
      alert(response.message);
      localStorage.setItem("token",response.data.token)
    },errorResponse=>{
      alert(errorResponse.error)
    })
  }
}
}
