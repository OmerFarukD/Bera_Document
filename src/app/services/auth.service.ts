import { LoginModel } from './../models/loginModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44363/api/Auth/"

register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
let newpath:string=this.apiUrl+"register";
return this.httpClient.post<SingleResponseModel<TokenModel>>(newpath,registerModel);
}
  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
let newpath:string=this.apiUrl+"login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newpath,loginModel);
    
  }
}