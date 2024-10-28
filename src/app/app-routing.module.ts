import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Comp/home/home.component';
import { SignupComponent } from './Comp/signup/signup.component';
import { LoginpageComponent } from './Comp/loginpage/loginpage.component';
import { ProfileComponent } from './Comp/profile/profile.component';
import { EditProfileComponent } from './Comp/edit-profile/edit-profile.component';
import { HomepageComponent } from './Comp/homepage/homepage.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
 
  {path:"loginpage",component:LoginpageComponent,

    children:[{
      path:"profile",component:ProfileComponent,

      children:[
        {
          path:"edit",component:EditProfileComponent
        }
      ]
    },
    {path:"homepage",component:HomepageComponent},
  ]

  },
  
  {path:"**",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
