import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowAllService } from '../../services/show-all.service';

@Component({
  selector: 'app-right-inbottom',
  templateUrl: './right-inbottom.component.html',
  styleUrls: ['./right-inbottom.component.scss']
})
export class RightInbottomComponent{
  constructor(private builder:FormBuilder,private ShowAllService:ShowAllService){}
   dataform=this.builder.group({
    typeResources:new FormControl(null),
   });
 done(){
  this.ShowAllService.AddType(this.dataform.value);
}
}
