/**
 * Core Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http"
import { FormsModule } from "@angular/forms"
/**
 * Extern Modules
 */
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
/**
 * Local Objects
 */
import { DataService } from './data.service';
import { AppComponent } from './-beginning/app.component';
import { HgModule } from "./-framework/hg.module"

@NgModule({
  declarations: [AppComponent],
  imports: [
    /*Core Modules*/
    BrowserModule, HttpModule, FormsModule,
    /*Local Modules*/
    HgModule
    /*Extern Modules*/
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
