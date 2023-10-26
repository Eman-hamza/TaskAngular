import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  color:string="#4F709C"
  color2:string="#4F709C"
  currentLang:string;

  constructor(public translate:TranslateService){
    this.currentLang=localStorage.getItem('currentLang')|| 'en'
    this.translate.use(this.currentLang)
  }
  changecurrentLang(lang:string){
    if(lang=='en'){
      this.color="#8EACCD"
      this.color2="#4F709C"
      this.translate.use(lang);
      localStorage.setItem('currentLang',lang)
    }
    else if(lang=='ar'){
      this.color="#4F709C"
      this.color2="#8EACCD"
      this.translate.use(lang);
      localStorage.setItem('currentLang',lang)
    }
  }
  ngOnInit(): void {
    // this.color="Black"
  }
}
