import { Component, OnInit } from "@angular/core";

@Component({
  selector: "multiselectdropdown",
  template: `
    <div>
      <label>Colour</label>
      <div>
        <select multiple>
          <option selected hidden>select any course</option>
          <option value="1">BCA</option>
          <option value="2">MCA</option>
          <option value="3">BBA</option>
          <option value="4">MBA</option>
          <option value="5">Bsc</option>
          <option value="6">Msc</option>
        </select>
      </div>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class MultiSelectDropdownComponent implements OnInit {
  car: Car = new Car();
  colours = Array<Colour>();

  ngOnInit(): void {
    this.colours = Array<Colour>();
    this.colours.push(new Colour(-1, "Please select"));
    this.colours.push(new Colour(1, "Green"));
    this.colours.push(new Colour(2, "Pink"));
    this.colours.push(new Colour(3, "Orange"));
    this.colours.push(new Colour(4, "Black"));

    this.car = new Car();
    this.car.color = new Colour(-1, "");
  }
}

export class Car {
  color: Colour;
}

export class Colour {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;
}
