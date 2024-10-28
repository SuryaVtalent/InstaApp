import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { IInstaDetails } from '../../Models/IInstaDetails';
import { error } from 'console';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent implements OnInit {

ISign:IInstaDetails;

  constructor(private router:Router,private signser:SignupService){
    this.ISign={instaId:0,name:"",fullName:"",email:"",password:"",phoneNumber:"",pId:0,userName:""}
  }

  ngOnInit(): void {

    let sessionlog=window.sessionStorage.getItem("login");
    if(sessionlog==null){
      this.router.navigate(["home"]).then(()=>{
        window.location.reload();
      })
    }

 this.signser.GetByInstId(parseInt(window.sessionStorage.getItem("instaid")!.toString())).subscribe(data=>{
  this.ISign=data;
 },error=>alert(error));
    
  }


  btn_logout():void{

    window.sessionStorage.removeItem("login");
    window.sessionStorage.clear();
    this.router.navigate(["home"]).then(()=>{
      window.location.reload();
    })

  }

}
