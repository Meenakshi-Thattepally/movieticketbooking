import { Injectable } from '@angular/core';
import { buff } from './models/mve.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userdet } from './utilities/userd';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  private mves:buff[]=[]

  //getproddata():buff[]{
    getproddata():Observable<buff[]>{
   return  this.hc.get<buff[]>("https://6328cb014c626ff832b7231c.mockapi.io/food");
  }
 
 
  
  update(id:any,updatedbody:any):Observable<any>{
   
     const endpoint="https://6328cb014c626ff832b7231c.mockapi.io/food/"+id
    return this.hc.put(endpoint,updatedbody)
   
  }
  callingapi(x:userdet):Observable<any>{
   
    const scnd="https://6328cb014c626ff832b7231c.mockapi.io/tostore"
   return this.hc.post(scnd,x)

}

getapidata():Observable<userdet[]>{
  return  this.hc.get<userdet[]>("https://6328cb014c626ff832b7231c.mockapi.io/tostore");
 }

 puteditdata(data:any,id:number){
  return this.hc.put<any>("https://6328cb014c626ff832b7231c.mockapi.io/tostore/"+id,data);
 }

deleteitem(id:number){
  return this.hc.delete("https://6328cb014c626ff832b7231c.mockapi.io/tostore/"+id);
}
}

