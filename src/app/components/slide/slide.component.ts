import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"]
})
export class SlideComponent implements OnInit {
  estadoPositivo: boolean = false;
  estado: boolean = false;
  claseNotificar: string[] = ["alertDes"];

  @Output() OisOrdenes = new EventEmitter<boolean>();

  isMenuCategoria: boolean = false;

  isOrdenes: boolean = false;

  claseMenu: string[] = ["alertDes"];

  @Output() showMenuCategoria: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() back: EventEmitter<null> = new EventEmitter();

  @Input() resregresar: boolean;
  constructor() {}

  ngOnInit() {}

  cambiaAlert() {
    if (this.estadoPositivo) {
      this.claseNotificar = ["alertDes"];
    } else {
      this.claseNotificar = ["alertAct", "bounce"];
    }
    this.estadoPositivo = !this.estadoPositivo;
  }
  menuCategoriaMostrar() {
    if (this.estado) {
      this.claseMenu = ["alertDes"];
    } else {
      this.claseMenu = ["successAct", "bounce"];
    }
    this.estado = !this.estado;
    console.log(this.isMenuCategoria);
    this.isMenuCategoria = !this.isMenuCategoria;
    this.showMenuCategoria.emit(this.isMenuCategoria);
  }

  ordenes() {
    this.claseMenu = ["alertDes"];
    this.estado = false;
    this.isOrdenes = !this.isOrdenes;
    if (this.isOrdenes == true) {
      this.OisOrdenes.emit(true);
    } else {
      this.OisOrdenes.emit(false);
    }
  }
  backbtn() {
    this.back.emit();
  }
}
