import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { PlateService } from "src/app/services/plate.service";
import { FoodDrink } from "src/app/models/food-drink";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"]
})
export class MenuListComponent implements OnInit {
  estadoPositivo: boolean = false;
  claseVer: string[] = ["alertDes"];
  pruebas: any = ["first", "second", "dessert"];
  resregresar: boolean = false;
  did: number;
  platos: FoodDrink[];
  private _yDisabled: boolean;
  @Input() idCategory: number;

  @Input("drag-scroll-y-disabled")
  get yDisabled() {
    return this._yDisabled;
  }
  set yDisabled(value: boolean) {
    this._yDisabled = value;
  }

  constructor(private plateService: PlateService) {}

  ngOnInit() {
    this.platos = this.plateService.findFoodByCategories(this.idCategory);
  }
  /* $('div').on('click', function() {
    $(this).toggleClass('show-description');
  }); */
  menuMostrarInf(i) {
    if (this.did == i) {
      this.did = -1;
    } else {
      this.did = i;
    }
    /* if (this.estadoPositivo) {
      this.claseVer = ["show-description"];
    } else {
      this.claseVer = [];
    }
    this.estadoPositivo = !this.estadoPositivo; */
  }
  //backbtn() {}
}
