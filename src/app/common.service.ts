import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resto } from './model/resto';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL= "http://localhost:3000/resto"
  
  regURL= "http://localhost:3000/adduser"
  constructor(private _http:HttpClient) {

   }
   getRestoList(){
    
    return this._http.get(this.URL);
   }
   addResto(info){
    return this._http.post(this.URL,info);
   }
   deleteResto(id){
    return this._http.delete(`${this.URL}/${id}`);
   
   }
   getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`);
   
   }
   updateResto(id,info){
    return this._http.put(`${this.URL}/${id}`,info);
   
   }
   addUser(usera: User):Observable<User>{
    return this._http.post<User>(this.regURL,usera);
  }
  getCurrentDataa(id){
    return this._http.get(`${this.regURL}`);
   
   }

}
