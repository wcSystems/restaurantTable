import { Component } from "@angular/core";
@Component({
  selector: "app-ordenes",
  templateUrl: "./ordenes.component.html",
  styleUrls: ["./ordenes.component.scss"]
})
export class OrdenesComponent {
  isOrdenes: boolean = true;

  toogleItem: boolean = false;
  ordenes: any = [
    {
      name: "Pollo",
      price: "14",
      Description:
        "lorem ipsut 1 lorem ipsut 1 lorem ipsut 1 lorem ipsut 1 lorem ipsut 1 lorem ipsut 1 lorem ipsut 1 lorem ipsut 1",
      img: "../../../assets/img/categories/1_entrada.jpg",
      cantidad: "5"
    },
    {
      name: "Ensalada",
      price: "25",
      Description:
        "lorem ipsut 2 lorem ipsut 2 lorem ipsut 2 lorem ipsut 2 lorem ipsut 2 lorem ipsut 2 lorem ipsut 2 lorem ipsut 2",
      img: "../../../assets/img/categories/2_ensalada.jpg",
      cantidad: "2"
    },
    {
      name: "Perro Caliente",
      price: "75",
      Description:
        "lorem ipsut 3 lorem ipsut 3 lorem ipsut 3 lorem ipsut 3 lorem ipsut 3 lorem ipsut 3 lorem ipsut 3 lorem ipsut 3",
      img: "../../../assets/img/categories/3_sandwich.jpg",
      cantidad: "8"
    }
  ];
  constructor() {}

  procesar(orden) {
    console.log("Orden", orden);
  }

  minus(i) {
    if (this.ordenes[i].cantidad > 1) {
      this.ordenes[i].cantidad--;
    }
  }

  plus(i) {
    this.ordenes[i].cantidad++;
  }
}
