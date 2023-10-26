import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-in-top',
  templateUrl: './right-in-top.component.html',
  styleUrls: ['./right-in-top.component.scss']
})
export class RightInTopComponent implements OnInit{
  constructor(private http:HttpClient){}
  namewith:string="Eman Hamza"
  url:any='../assets/def.png';

  // save image in localStorage
  onFileChanged(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageBase64 = e.target?.result as string;
        localStorage.setItem('imageData', imageBase64);
        console.log('Image saved in localStorage.');
      };
      reader.readAsDataURL(file);
    }
  }
  // get Image From LocalStorage
  getImageFromLocalStorage(): string | null {
    const imageBase64 = localStorage.getItem('imageData');
    return imageBase64;
  }
  // ************************ save name  **************************
  ngOnInit(): void {
    const name = localStorage.getItem('key') || '' ;
    this.namewith=name?.substring(1,name.length - 1);  
  }
  savename(){
    localStorage.setItem('key', JSON.stringify(this.namewith));
  }
  
}
