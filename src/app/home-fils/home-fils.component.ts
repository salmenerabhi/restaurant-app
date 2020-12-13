import { Component,  EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { resto } from '../model/resto';
@Component({
  selector: 'app-home-fils',
  templateUrl: './home-fils.component.html',
  styleUrls: ['./home-fils.component.css']
})
export class HomeFilsComponent implements OnInit {
  @Input() resto:resto;
  @Input() searchnameInput;
  @Output() notification= new EventEmitter <resto>() ;
  isCollapsed:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  afficherplus(){
    
    this.isCollapsed=!this.isCollapsed;
  }
}
