import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  public collection;
  email: any;
  mdp: any;
  registerForm = new FormGroup({


    email: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),

  })

  constructor(private User: CommonService, private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.User.getCurrentDataa(this.router.snapshot.params.id).subscribe((aa) => {
      this.collection = aa
      console.log(this.collection)
    })
  }
  onSubmit(user: User) {
    for (let u of this.collection) {
      console.log(u.email)
      console.log(u.mdp)
      if (u.email == this.email && u.mdp == this.mdp) {
        console.log("true")
        this.route.navigate[("../list")];
        
      }
      else{
        console.log("false")
        alert("saisir vos informations correctement")
      }
    }
    
  


  }
  closeAlert() {
    this.alert = false;
  }
}
