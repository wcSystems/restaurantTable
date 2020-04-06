import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PlateService } from "src/app/services/plate.service";
import { Category } from "src/app/models/category";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  indexclick: number;
  resregresar: boolean;
  categorias: Category[];
  @Output() valor: EventEmitter<number> = new EventEmitter<number>();

  @Output() regresar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private plateService: PlateService) {}

  ngOnInit() {
    this.categorias = this.plateService.getCategories();
  }

  goList(id) {
    this.categorias = this.plateService.getCategoriesById(id);
    if (this.categorias.length === 0) {
      this.valor.emit(id);
      this.resregresar = true;
      this.regresar.emit(this.resregresar);
    }
  }
}
