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
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
/**
 * Local Objects
 */
import { AppComponent } from './beginning/app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /*Core Modules*/
    BrowserModule, HttpModule, FormsModule,
    /*Extern Modules*/
    NgbModule.forRoot(),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
