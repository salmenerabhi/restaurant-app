import { Component, OnInit } from '@angular/core';
import { resto } from '../model/resto';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrls: ['./home-restaurant.component.css']
})
export class HomeRestaurantComponent implements OnInit {
  title ;
  ListResto: any;
  searchname:string;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.title = 'Galerie des Restaurants';
    this.ListResto=this.commonService.getRestoList().subscribe((r)=>(this.ListResto=r));
    console.log(this.ListResto );
  }


}
