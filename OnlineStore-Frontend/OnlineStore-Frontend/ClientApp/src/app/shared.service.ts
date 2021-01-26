import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/users');
  }

  // tslint:disable-next-line: typedef
  createUser(val: any){
    return this.http.post(this.APIUrl + '/createuser', val);
  }

  // tslint:disable-next-line: typedef
  updateUser(id: any, val: any){
    return this.http.put(this.APIUrl + '/updateuser/' + id, val);
  }

  // tslint:disable-next-line: typedef
  deleteUser(id: any){
    return this.http.delete(this.APIUrl + '/deleteuser/' + id);
  }

  getCategoryList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/categories');
  }

  // tslint:disable-next-line: typedef
  createCategory(val: any){
    return this.http.post(this.APIUrl + '/createcategory', val);
  }

  // tslint:disable-next-line: typedef
  updateCategory(id: any, val: any){
    return this.http.put(this.APIUrl + '/updatecategory/' + id, val);
  }

  // tslint:disable-next-line: typedef
  deleteCategory(id: any){
    return this.http.delete(this.APIUrl + '/deletecategory/' + id);
  }

  getVendorList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/vendors');
  }

  // tslint:disable-next-line: typedef
  createVendor(val: any){
    return this.http.post(this.APIUrl + '/createvendor', val);
  }

  // tslint:disable-next-line: typedef
  updateVendor(id: any, val: any){
    return this.http.put(this.APIUrl + '/updatevendor/' + id, val);
  }

  // tslint:disable-next-line: typedef
  deleteVendor(id: any){
    return this.http.delete(this.APIUrl + '/deletevendor/' + id);
  }

  getProdStatusList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/productstatuses');
  }

  // tslint:disable-next-line: typedef
  createProdStatus(val: any){
    return this.http.post(this.APIUrl + '/createproductstatus', val);
  }

  // tslint:disable-next-line: typedef
  updateProdStatus(id: any, val: any){
    return this.http.put(this.APIUrl + '/updateproductstatus/' + id, val);
  }

  // tslint:disable-next-line: typedef
  deleteProdStatus(id: any){
    return this.http.delete(this.APIUrl + '/deleteproductstatus/' + id);
  }

  getProdTagList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/producttags');
  }

  // tslint:disable-next-line: typedef
  createProdTag(val: any){
    return this.http.post(this.APIUrl + '/createproducttag', val);
  }

  // tslint:disable-next-line: typedef
  updateProdTag(id: any, val: any){
    return this.http.put(this.APIUrl + '/updateproducttag/' + id, val);
  }

  // tslint:disable-next-line: typedef
  deleteProdTag(id: any){
    return this.http.delete(this.APIUrl + '/deleteproducttag/' + id);
  }

  getTrademarkList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/trademarks');
  }

  getTrademarkById(id: number): Observable<any>{
    return this.http.get(this.APIUrl + '/gettrademark/' + id);
  }

  // tslint:disable-next-line: typedef
  createTrademark(data: FormData){
    return this.http.post(this.APIUrl + '/createtrademark', data);
  }

  // tslint:disable-next-line: typedef
  deleteTrademark(id: any){
    return this.http.delete(this.APIUrl + '/deletetrademark/' + id);
  }
}
