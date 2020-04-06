import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
  styleUrls: ["./categoria.component.scss"]
})
export class CategoriaComponent implements OnInit {
  public images: any = [
    "entrada",
    "hamburguesa",
    "ensalada",
    "sandwiche",
    "bebida",
    "postre"
  ];
  constructor() {}

  ngOnInit() {}
}
