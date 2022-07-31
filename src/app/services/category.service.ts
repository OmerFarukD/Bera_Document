import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
apiUrl="https://localhost:44363/api/Categories/"
  constructor(private  httpClient:HttpClient) { }

  getAllCategories():Observable<ListResponseModel<Category>>{
    let newpath=this.apiUrl+"GetAll"
    return this.httpClient.get<ListResponseModel<Category>>(newpath)
  }
  getCategoryById(id:number){
let newpath=this.apiUrl+`getbyid?id=${id}`
return this.httpClient.get<SingleResponseModel<Category>>(newpath)
  }
}
