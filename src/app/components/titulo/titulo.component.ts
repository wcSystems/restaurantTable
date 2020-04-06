import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input
} from "@angular/core";

@Component({
  selector: "app-titulo",
  templateUrl: "./titulo.component.html",
  styleUrls: ["./titulo.component.scss"]
})
export class TituloComponent implements AfterViewInit {
  @ViewChild("ttl", { static: false })
  ttl: ElementRef;
  @Input() title: string;

  constructor() {}

  /* proyect() {
    var el = $('h1').eq(0);
    var text = el.text();
    var markup = '';
    for (i = 0; i < text.length; i++) {
      markup += '<span>' + text[i] + '</span>';
    }
    el.html(markup);
  } */

  ngAfterViewInit(): void {
    console.log(this.ttl);
  }
}
