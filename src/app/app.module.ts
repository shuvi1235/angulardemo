import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DropdownComponent } from "./select.component";
import { MultiSelectDropdownComponent } from "./multiselect.component";
import { DateTimePickerComponent } from "./datepicker.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DropdownComponent,
    MultiSelectDropdownComponent,
    DateTimePickerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
