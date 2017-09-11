import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from "@angular/core"

@Component({
  selector: "hg-button",
  template: `<button #button class="button">Button</button>`,
})
export class HgButtonComponent {
  @ViewChild('button') button: ElementRef;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.button.nativeElement.innerHTML = "HOLA QUE LO QUE";
  }
}