import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Comp/signup/signup.component';
import { HomeComponent } from './Comp/home/home.component';
import { SignupService } from './Services/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './Comp/loginpage/loginpage.component';
import { ProfileComponent } from './Comp/profile/profile.component';
import { EditProfileComponent } from './Comp/edit-profile/edit-profile.component';
import { HomepageComponent } from './Comp/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginpageComponent,
    ProfileComponent,
    EditProfileComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SignupService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
