import { Component, OnInit, ViewChild } from '@angular/core';
import { NewResourceComponent } from '../new-resource/new-resource.component';
import { RightInTopComponent } from '../right-in-top/right-in-top.component';
import { ShowAllService } from '../../services/show-all.service';
import { Itypeofresouces } from 'src/Interface/Itypeofresouces';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{
  constructor(private ShowAllService:ShowAllService){}
  typeresources:any;
  Timeresources:any;
  Dayworks:any;
  namewith!:string;
  //get img
  getImageFromLocalStorage(): string | null {
    const image = localStorage.getItem('imageData');
    return image;
  }
  ngOnInit(): void {
     const name = localStorage.getItem('key') || '' ;
    this.namewith=name?.substring(1,name.length - 1); 
    
    // services
    this.typeresources=this.ShowAllService.Itype;
    this.Timeresources=this.ShowAllService.Itime;
    this.Dayworks=this.ShowAllService.iwork;
  }
}
