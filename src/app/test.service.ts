import { Injectable } from '@angular/core';
// import{ HttpClient} from '@angular/common/http';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Regis, loginD} form './regis';
import { Observable,throwError } from 'rxjs';
import{ catchError} from 'rxjs/operators';
import { Registration, loginD, registrationone } from './regis';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  registration_url="https://nodeprojectapi.herokuapp.com/register";
  login_url="https://nodeprojectapi.herokuapp.com/login";
   regnew_url="https://nodeprojectapi.herokuapp.com/userdata";
   get_url="https://nodeprojectapi.herokuapp.com/userdata";
   token=null;
 
 

  constructor(private http:HttpClient, private strseivice:SessionService) {
     this.token=sessionStorage.getItem('token');
        console.log(this.token);
  }
  registerData(formobj:Registration):Observable<Registration[]>{
    return this.http.post<Registration[]>(this.registration_url,formobj)
    .pipe(catchError(this.errorHandler))


  }
  loginData(logobj:loginD):Observable<loginD[]>{
    return this.http.post<loginD[]>(this.login_url,logobj)
    .pipe(catchError(this.errorHandler))


   }
  
    
    fillUpData(empobj:registrationone):Observable<registrationone[]>{
      return this.http.post<registrationone[]>(this.regnew_url,empobj,
        {headers:new HttpHeaders({'Authorization':this.token})})
        
      
      
    }
    
 getUserId():Observable<registrationone[]>{
  return this.http.get<registrationone[]>(this.get_url,
    {headers:new HttpHeaders({'Authorization':this.token})})
 }

  
  errorHandler(error:HttpErrorResponse){
    return throwError(error)

  }
  
}

