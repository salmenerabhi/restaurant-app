import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { CommonService } from '../common.service';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/User';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


user:User = new User();

show:boolean = false;

add():void{
  this.us.addUser(this.user).subscribe(res => console.log(res));
  this.show = true;
  setTimeout(()=>{ 
    this.show = false; 
  }, 3000);
}

constructor(private us: CommonService) { }

ngOnInit(): void {
  
}

}
