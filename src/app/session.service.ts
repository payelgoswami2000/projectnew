import { Injectable } from '@angular/core';
import { windowWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  setLoginResponse(firstname:string,lastname:string,token:string){
    
    window.sessionStorage.setItem('firstname',firstname);
    window.sessionStorage.setItem('lastname',lastname);
    window.sessionStorage.setItem('token',token);



  }
  getToken(){
    window.sessionStorage.getItem('token')
  }
  getAllData(){
    const allData=[];
     allData.push(window.sessionStorage.getItem('token'),
    
   
    window.sessionStorage.getItem('firstname'),
    window.sessionStorage.getItem('lastname'),
    window.sessionStorage.getItem('token'))
   return allData;

  }
  removeStroage(){
    window.sessionStorage.removeItem('firstname');
    window.sessionStorage.removeItem('lastname');
    window.sessionStorage.removeItem('token');
  }
}
