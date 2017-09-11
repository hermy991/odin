import { Component } from '@angular/core';
import { DataService } from "../data.service"
import { HgButtonComponent } from "../-framework/elements/button/button.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interfaces: Array<any>
  constructor(private ds: DataService) {
    ds.getInterfaces()
      .subscribe(res => this.interfaces = res)
  }
}
