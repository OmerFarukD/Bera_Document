import { LoginModel } from './../../models/loginModel';
import { FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private authService:AuthService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  this.createLoginForm()
  }
createLoginForm(){
  this.loginForm=this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required]
  })
}
login(){
  if(this.loginForm.valid){
    let model:LoginModel=Object.assign({},this.loginForm.value);
    this.authService.login(model).subscribe(response=>{
      alert(response.message)
      localStorage.setItem("token",response.data.token)
    },errorResponse=>{
      alert(errorResponse.error)
    })
  }
  else{
    alert("Formunuz eksik.")
  }
}

}
