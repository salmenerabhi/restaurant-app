import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import {CommonService} from '../common.service';
import { resto } from '../model/resto';
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
public liste : any;
public collection : any= [];
alert:boolean=false;
filter:"";

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((r)=>(this.liste=r));
  console.log(this.liste );
  }
  deleteResto(resto){
    this.collection.splice(resto.id,1)
    this.commonService.deleteResto(resto).subscribe((r)=>{
      console.log("data deleted successfully!", r )
      this.alert=true;
    });
  }
  closeAlert(){
    this.alert=false;
  }
    }
  
