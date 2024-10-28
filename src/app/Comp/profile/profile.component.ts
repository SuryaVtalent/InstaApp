import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { IInstaDetails } from '../../Models/IInstaDetails';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

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

  btn_Edit():void{
    this.router.navigate(["edit"]).then(()=>{
      window.location.reload()
    });
  }

}
