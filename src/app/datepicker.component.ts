import { Component, OnInit } from "@angular/core";

@Component({
  selector: "datetimepicker",
  template: `
    <div>
      <label>Select DateTime</label>
      <div>
        <input type="datetime-local" />
        <input type="checkbox" value="1" />
      </div>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class DateTimePickerComponent {}
