import { Component, OnInit } from "@angular/core";
import { XsegundoService } from "../../services/xsegundo.service";
import { ValorReloj } from "../../models/valor-reloj";
import { Observable } from "rxjs";

@Component({
  selector: "app-puesto",
  templateUrl: "./puesto.component.html",
  styleUrls: ["./puesto.component.scss"]
})
export class PuestoComponent implements OnInit {
  datos$: Observable<ValorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;
  public isMenuCategoria: boolean;
  public resregresar: boolean;
  public idCategoria: number;

  isWelcome: boolean = true;
  OisOrdenes: boolean = false;
  puesto: string = "";

  constructor(private segundo: XsegundoService) {}

  ngOnInit() {
    this.Clock();
  }

  showMenu() {
    this.isWelcome = !this.isWelcome;
  }

  login(boolean) {
    this.isWelcome = !this.isWelcome;
  }

  ordenes(boolean) {
    this.OisOrdenes = boolean;
    this.isMenuCategoria = false;
  }

  Clock() {
    this.datos$ = this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo;
    });
  }
  execute($event) {
    this.isMenuCategoria = $event;
    this.idCategoria = 0;
    this.resregresar = false;
    this.OisOrdenes = false;
  }
  back() {
    this.idCategoria = 0;
    this.resregresar = false;
  }
  valor($event) {
    this.idCategoria = $event;
    this.OisOrdenes = false;
  }
}
