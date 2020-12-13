import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { HomeRestaurantComponent } from './home-restaurant/home-restaurant.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeFilsComponent } from './home-fils/home-fils.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    ListRestaurantComponent,
    HomeRestaurantComponent,
    HomeFilsComponent,
    RegisterComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
