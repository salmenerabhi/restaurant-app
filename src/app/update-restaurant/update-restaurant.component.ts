import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {CommonService} from '../common.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean=false;
  editRestaurant=new FormGroup({

    name:new FormControl(''),
    Adress:new FormControl(''),
    tel:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((r)=>{
      console.log(r)
      this.editRestaurant=new FormGroup({

        name:new FormControl(r['name']),
        Adress:new FormControl(r['Adress']),
        tel:new FormControl(r['tel']),
        email:new FormControl(r['email'])
    })
  })

}
updateResto(){
  this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((r)=>{
    console.log(r,"data updated")
    this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
}
