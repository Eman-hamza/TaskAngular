import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';
import { ShowAllService } from '../../services/show-all.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settime',
  templateUrl: './settime.component.html',
  styleUrls: ['./settime.component.scss'],
  // standalone:true,
  // imports: [MatSlideToggleModule]
})
export class SettimeComponent {
  constructor(private builder:FormBuilder,private renderer: Renderer2
    ,private toast:ToastrService,private ShowAllService:ShowAllService,private _Route:Router){}

  // @ViewChild('Satur', { read: ElementRef })
  // Satur!: ElementRef;
  dayworkSat:boolean=false;
  dayworkSun:boolean=false;
  dayworkMon:boolean=false;
  dayworkTues:boolean=false;
  dayworkWed:boolean=false;
  dayworkThur:boolean=false;
  dayworkFri:boolean=false;
  listDays:string[]=[];
  Saturday:boolean=false;
  Sunday:any;
  Monday:any;
  Tuesday:any;
  Wednesday:any;
  Thursday:any;
  Friday:any;

  Saturdayshow(){
    this.Saturday=!this.Saturday;
    this.dayworkSat=!this.dayworkSat;
    if(this.dayworkSat){
      this.listDays.push("Saturday")
    }
    else{
      this.listDays.filter(item => item !== "Saturday");
    }
  }
  SundayShow(){
    this.Sunday=!this.Sunday
    this.dayworkSun=!this.dayworkSun;
    if(this.dayworkSun){
      this.listDays.push("Sunday")
    }
    else{
      this.listDays.filter(item => item !== "Sunday");
    }
  }
  MondayShow(){
    this.Monday=!this.Monday;
    this.dayworkMon=!this.dayworkMon;
    if(this.dayworkMon){
      this.listDays.push("Monday")
    }
    else{
      this.listDays.filter(item => item !== "Monday");
    }
  }
  TuesdayShow(){
    this.Tuesday=!this.Tuesday;
    this.dayworkTues=!this.dayworkTues;
    if(this.dayworkTues){
      this.listDays.push("Tuesday")
    }
    else{
      this.listDays.filter(item => item !== "Tuesday");
    }
  }
  WednesdayShow(){
    this.Wednesday=!this.Wednesday;
    this.dayworkWed=!this.dayworkWed;
    if(this.dayworkWed){
      this.listDays.push("Wednesday")
    }
    else{
      this.listDays.filter(item => item !== "Wednesday");
    }
  }
  ThursdayShow(){
    this.Thursday=!this.Thursday;
    this.dayworkThur=!this.dayworkThur;
    if(this.dayworkThur){
      this.listDays.push("Thursday")
    }
    else{
      this.listDays.filter(item => item !== "Thursday");
    }
  }
  FridayShow(){
    this.Friday=!this.Friday;
    this.dayworkFri=!this.dayworkFri;
    if(this.dayworkFri){
      this.listDays.push("Friday")
    }
    else{
      this.listDays.filter(item => item !== "Friday");
    }
  }
  Save(){
    this.ShowAllService.AddDays(this.listDays)
    this._Route.navigate(['/store']);
  }
// ****************************************************************************
public start:any[]=[["Sutrday"], ["Sunday"], ["Monday"], ["Tuesday"],  ["Wednesday"],["Thursday"], ["Friday"]]
public end:any[]=[["Sutrday"],["Sunday"],["Monday"],["Tuesday"],["Wednesday"],["Thursday"],["Friday"]]
public minus:any[]=[[],[],[],[],[],[],[]]

addStart(day:any){
  switch(day){
    case 'stur':
   return this.start[0].push(1);
   case 'sun' :
    return this.start[1].push(1);
  case 'mon' :
      return this.start[2].push(1); 
  case 'Tues' :
    return this.start[3].push(1);
    case 'Wed' :
      return this.start[4].push(1);
      case 'Thur' :
        return this.start[5].push(1);
      case 'Fri' :
        return this.start[6].push(1);            
    default:
      return 'Default Content';
  }
}
addEnd(day:any){
  switch(day){
  case 'stur':
   return this.end[0].push(1);
  case 'sun' :
    return this.end[1].push(1);
  case 'mon' :
    return this.end[2].push(1);  
  case 'Tues' :
    return this.end[3].push(1);
  case 'Wed' :
    return this.end[4].push(1); 
  
    case 'Thur' :
    return this.end[5].push(1);
  case 'Fri' :
    return this.end[6].push(1);  
    default:
      return 'Default Content';
  }}


  addminus(day:any){
    switch(day){
    case 'stur':
     return this.minus[0].push(1);
    case 'sun' :
      return this.minus[1].push(1);
    case 'mon' :
      return this.minus[2].push(1);  
    case 'Tues' :
      return this.minus[3].push(1);
    case 'Wed' :
      return this.minus[4].push(1); 
    
      case 'Thur' :
      return this.minus[5].push(1);
    case 'Fri' :
      return this.minus[6].push(1);  
      default:
        return 'Default Content';
    }}

    // reemove 
    remove(day:any){
      switch(day){
        case 'stur':
          this.start[0].pop(1)&&this.end[0].pop(1) && this.minus[0].pop(1);
          // this.toast.show("Removed Successfully")
          return ;
        case 'sun' :
           this.start[1].pop(1) && this.end[1].pop(1) && this.minus[1].pop(1);
          // this.toast.error("Removed Successfully")
          return;
        case 'mon' :
          return this.start[2].pop(1) && this.end[2].pop(1) && this.minus[2].pop(1);
        case 'Tues' :
          return this.start[3].pop(1) && this.end[3].pop(1) && this.minus[3].pop(1);
        case 'Wed' :
          return this.start[4].pop(1) && this.end[4].pop(1) && this.minus[4].pop(1);; 
        
          case 'Thur' :
          return this.start[5].pop(1) && this.end[5].pop(1) && this.minus[5].pop(1);
        case 'Fri' :
          return this.start[6].pop(1) && this.end[6].pop(1) && this.minus[6].pop(1);;  
          default:
            return 'Default Content';
        }    }
}
