import { Injectable } from '@angular/core';
import {Itypeofresouces} from '../Interface/Itypeofresouces'
import { FormGroup } from '@angular/forms';
import {Itimeofreources} from '../Interface/Itimeofreources'
import {Iwork} from '../Interface/Iwork'


@Injectable({
  providedIn: 'root'
})
export class ShowAllService {
  Itype:Itypeofresouces={typeResources: ''};
  Itime:Itimeofreources={
    TheResourceisavailableto: 3, Resourcetime: '', Multiplebooking: '',
    counter: 0,
    numberofperson: 0
  };
  iwork:Iwork[]=[];
  constructor() { }
  AddType(type:any){this.Itype=type;}
  AddTime(time:any){this.Itime=time}
  AddDays(day:any){this.iwork=day}
}
