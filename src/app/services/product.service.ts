import { ResponseModel } from './../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

apiUrl="https://localhost:44363/api/Products/"
getAll():Observable<ListResponseModel<Product>>{
  let newpath=this.apiUrl+"GetAll"
  return this.httpClient.get<ListResponseModel<Product>>(newpath)
}
getAllByCategoryId(id:number):Observable<ListResponseModel<Product>>{
  let newpath=this.apiUrl+`GetByCategory?categoryId=${id}`
  return this.httpClient.get<ListResponseModel<Product>>(newpath);
}
add(product:Product):Observable<ResponseModel>{
  let newpath =this.apiUrl+"Add"
  return this.httpClient.post<ResponseModel>(newpath,product)
}
}
