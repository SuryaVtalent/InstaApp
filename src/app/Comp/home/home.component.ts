import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { IInstaDetails } from '../../Models/IInstaDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  
  Username:string="";
  Password:string="";

constructor(private router:Router,private signser:SignupService){}

  ngOnInit(): void {

    let sessionlog=window.sessionStorage.getItem("login");
    if(sessionlog!=null){
      this.router.navigate(["loginpage"]).then(()=>{
        window.location.reload();
      })
    }    
    
  }

  btn_Signup():void{
this.router.navigate(["signup"]);

  }

  btn_Loginpage():void{
    debugger;
  this.signser.Checklogin(this.Username,this.Password).subscribe((data:any)=>{
    if(data==null){
      alert("You Dont have Account please SignUp to login");
      this.router.navigate(["signup"]);
    }else{
      window.sessionStorage.setItem("login",data);
      window.sessionStorage.setItem("deptid",data.pId.toString());
      window.sessionStorage.setItem("instaid",data.instaId.toString());

        if(data.pId==1){
          this.router.navigate(["loginpage"]).then(()=>{
            window.location.reload();
          })
        }else{
          this.router.navigate(["home"]);
        }
    }
  })

  }

}
