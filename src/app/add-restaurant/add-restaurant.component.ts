import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {CommonService} from '../common.service'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean=false;
  addRestaurant=new FormGroup({

    name:new FormControl(''),
    Adress:new FormControl(''),
    tel:new FormControl(''),
    email:new FormControl('')
    
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createResto(){
   this.resto.addResto(this.addRestaurant.value).subscribe((r)=>{
    this.alert=true; 
    this.addRestaurant.reset({});
    console.log("get infos from service",r)
   })
  }
  closeAlert(){
    this.alert=false;
  }
}
