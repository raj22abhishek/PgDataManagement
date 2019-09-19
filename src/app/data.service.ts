import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result:any;
  constructor(private _http: HttpClient) { }
  // public getUsers():Observable<any>({
  //   return 
  // })
    public getUsers():Observable<any>{
      return this._http.get("http://localhost:3000/api/users/");
    }
    public updateUsers(modal:any):Observable<any>{
      var buildingRoom = modal.building.toString()+modal.room.toString()
      return this._http.put("http://localhost:3000/api/users/update/"+modal.key,modal);
    }
    public deleteUsers(modal:any):Observable<any>{
      var buildingRoom = modal.building.toString()+modal.room.toString()
      return this._http.delete("http://localhost:3000/api/users/delete/"+buildingRoom,modal);
    }
    public insertUsers(modal:any):Observable<any>{
      return this._http.post("http://localhost:3000/api/users/insert/",modal);
    }
//     this._http.get("http://localhost:3000/api/users/").subscribe(result=>{
//       console.log(result);
//       return result;
//     })
//       // .map(result => this.result = result.json().data);
// }
}
