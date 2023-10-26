import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.scss']
})
export class NewResourceComponent {
  constructor(private http:HttpClient){}
  name:string="Eman Hamza"
  url:any='../assets/def.png';

  onFileChanged(event:any) {
    const file: File = event.target.files[0];
    if(file){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(e:any)=>{
        this.url=e.target.result
      }
      reader.readAsDataURL(file);
    }
  }


}
