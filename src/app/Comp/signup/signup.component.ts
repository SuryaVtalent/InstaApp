import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { IInstaDetails } from '../../Models/IInstaDetails';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

ISign:IInstaDetails;

  constructor(private router:Router,private signser:SignupService){
    this.ISign={instaId:0,name:"",fullName:"",email:"",password:"",phoneNumber:"",pId:0,userName:""}
  }

  ngOnInit(): void {
    
  }

  btn_signin():void{
    debugger;
    this.ISign.pId=1;

    this.signser.SignUp(this.ISign).subscribe(data=>{
      alert("Registerd Successfully");
      this.router.navigate(["home"]);
    },error=>alert(error));

  }

  btn_Login():void{
    this.router.navigate(["home"]);
  }



}
