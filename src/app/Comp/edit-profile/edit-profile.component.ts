import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {


  constructor(private router:Router){}

  ngOnInit(): void {

    let sessionlog=window.sessionStorage.getItem("login");
    if(sessionlog==null){
      this.router.navigate(["home"]).then(()=>{
        window.location.reload();
      })
    }
    
  }

}
