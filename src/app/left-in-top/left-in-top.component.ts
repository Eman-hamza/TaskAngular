import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ShowAllService } from '../../services/show-all.service';

@Component({
  selector: 'app-left-in-top',
  templateUrl: './left-in-top.component.html',
  styleUrls: ['./left-in-top.component.scss']
})
export class LeftInTopComponent{
  constructor(private builder:FormBuilder,private ShowAllService:ShowAllService){}
  number:number=3;
  dataform=this.builder.group({
    TheResourceisavailableto:new FormControl(null),
    Resourcetime:new FormControl(null),
    Multiplebooking:new FormControl(null),
    counter:new FormControl(null),
    numberofperson:new FormControl(50),
});
  showDiv:any='';
  showDiv2:any='';
  toggleShowHide:boolean=true;
  toggleShowHide2:boolean=false;  
  counter: number = 10;
  numberofperson:number=50;
  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  //////////
  check(e:any){
    this.ShowAllService.AddTime(this.dataform.value);
    const elementId=e.target.id;
    if(elementId=="Radio2"){
      this.toggleShowHide2=false;

    }else{
      this.toggleShowHide2=true;
    }
  }
  checktwo(e:any){
    this.ShowAllService.AddTime(this.dataform.value);
    const elementId=e.target.id;
    if(elementId=="iRadio2"){
      this.toggleShowHide=true;

    }else{
      this.toggleShowHide=false;
    }
  }
}
