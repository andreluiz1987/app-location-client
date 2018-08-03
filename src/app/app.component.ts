import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { } from "@types/googlemaps";
import { Position } from "../app/models/Position";

import { AgmCoreModule } from '@agm/core';
import { PositionServices } from "src/app/services/position.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  address: string = "";
  lat: number = -19.867464;
  lng: number = -43.926077;
  zoom: number = 12;

  constructor(private _service: PositionServices) { }

  positions: Position[] = [];

  ngOnInit() {

  }

  onUpdateTable() {
    this._service.getPositions().subscribe(
      response => {
        console.log(response);
        this.positions = []
        response.forEach(element => {

          var obj = new Position();
          obj.latitude = element.latitude;
          obj.longitude = element.longitude;
          obj.data = response.date;

          this.positions.push(obj);
        });
      },
      error => {
        console.log("Erro ao tentar carregar a lista de posições.")
      }
    );
  }

  onSelect(selectedItem: any) {

    console.log("Selected item Id: ", selectedItem);

    this.lat = selectedItem.latitude;
    this.lng = selectedItem.longitude;
    this.zoom = 15;

    this._service.getAddress(this.lat, this.lng).subscribe(
      response => {
        debugger
        console.log(response);
        this.address = response.formatted_address;
      },
      error => {
        this.address = "Não foi possível localizar o endereço! :("
        console.log("Erro ao tentar carregar o endereço.")
      }
    );
  }

  onMouseOver(infoWindow, gm) {

    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();
  }
}
