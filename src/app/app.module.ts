import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewResourceComponent } from './new-resource/new-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RightInTopComponent } from './right-in-top/right-in-top.component';
import { LeftInTopComponent } from './left-in-top/left-in-top.component';
import { RightInbottomComponent } from './right-inbottom/right-inbottom.component';
import { SettimeComponent } from './settime/settime.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { StoreComponent } from './store/store.component';
import { TimeStartComponent } from './time-start/time-start.component';
import { TimeEndComponent } from './time-end/time-end.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewResourceComponent,
    RightInTopComponent,
    LeftInTopComponent,
    RightInbottomComponent,
    SettimeComponent,
    StoreComponent,
    TimeStartComponent,
    TimeEndComponent,
    PlusComponent,
    MinusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(
      {
        defaultLanguage:'ar',
        loader:{
          provide:TranslateLoader,
          useFactory:CreateTranslateLoader,
          deps:[HttpClient]
        }
      }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
export function CreateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
