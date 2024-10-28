import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'InstaApp';

  flagAnony:boolean=true;
  flagSecure:boolean=false;

constructor(){}

  ngOnInit(): void {
    debugger;
    
    let sessionval=window.sessionStorage.getItem("login");

    if(sessionval==null){
      this.flagAnony=true;
      this.flagSecure=false;
    }else{
      this.flagAnony=false;
      this.flagSecure=true;
    }
    
  }
}
