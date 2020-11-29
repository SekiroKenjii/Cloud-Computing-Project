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
}
