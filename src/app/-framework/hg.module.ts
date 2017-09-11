import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { CommonModule } from '@angular/common';
/**
 * Local Objects
 */
import { HgButtonComponent } from "./elements/button/button.component"
@NgModule({
  declarations: [HgButtonComponent],
  exports: [HgButtonComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HgModule { }