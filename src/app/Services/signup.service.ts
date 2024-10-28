import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstaDetails } from '../Models/IInstaDetails';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  HostUrl:string="http://localhost:4826";
  WebPath:string="/api/Child/";

  constructor(private httpser:HttpClient) { }


  SignUp(Ins:IInstaDetails):Observable<number>{
    debugger;
   return this.httpser.post<number>(this.HostUrl+this.WebPath+"InsertNames",Ins);
  }

  Checklogin(email:string,pwd:string):Observable<IInstaDetails>{
    debugger;
  return  this.httpser.get<IInstaDetails>(this.HostUrl+this.WebPath+"GetEmailandPassword?Email="+email+"&Password="+pwd);
  }

  GetByInstId(Instad:number):Observable<IInstaDetails>{
   return this.httpser.get<IInstaDetails>(this.HostUrl+this.WebPath+"GetSignUpById?InstagramId="+Instad);
  }

}
