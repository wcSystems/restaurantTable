import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { TweenMax, TimelineMax } from "gsap";

@Component({
  selector: "app-esquinero",
  templateUrl: "./esquinero.component.html",
  styleUrls: ["./esquinero.component.scss"]
})
export class EsquineroComponent implements AfterViewInit {
  @ViewChild("crcSm", { static: false })
  crcSm: ElementRef;

  @ViewChild("crcBg", { static: false })
  crcBg: ElementRef;

  @ViewChild("crcArc", { static: false })
  crcArc: ElementRef;

  @ViewChild("crcSd", { static: false })
  crcSd: ElementRef;

  @ViewChild("brgr", { static: false })
  brgr: ElementRef;

  @ViewChild("brgrTop", { static: false })
  brgrTop: ElementRef;

  @ViewChild("brgrMid", { static: false })
  brgrMid: ElementRef;

  @ViewChild("brgrBot", { static: false })
  brgrBot: ElementRef;

  @ViewChild("linkDrbl", { static: false })
  linkDrbl: ElementRef;

  @ViewChild("linkCdpn", { static: false })
  linkCdpn: ElementRef;

  @ViewChild("linkTwtr", { static: false })
  linkTwtr: ElementRef;

  colBg: string = "#21264b";

  on: boolean = false;
  time: boolean = true;

  @Input() isWelcome: boolean;
  @Output() OisWelcome = new EventEmitter<boolean>();

  constructor() {}
  ngAfterViewInit(): void {
    TweenMax.to(this.crcArc.nativeElement, {
      transformOrigin: "50% 50%",
      x: 120,
      y: 120,
      visibility: "visible"
    }); 

    TweenMax.to(
      [
        this.crcBg.nativeElement,
        this.crcSm.nativeElement,
        this.crcArc.nativeElement,
        this.crcSd.nativeElement,
        this.brgrTop.nativeElement,
        this.brgrMid.nativeElement,
        this.brgrBot.nativeElement
      ],
      { transformOrigin: "50% 50%" }
    );
  }

  menuOn(tl = new TimelineMax()) {
    const brgrShft = 10;
    const brgrRt = 12;
    tl.to(
      this.crcBg.nativeElement,
      1.2,
      {
        scale: 2.5,
        ease: "elastic.out(1.2, 0.5)"
      },
      0
    )
      .to(
        this.crcSm.nativeElement,
        0.8,
        {
          scale: 1.3,
          ease: "elastic.out(5, 1)"
        },
        0.1
      )
      .to(
        this.crcSd.nativeElement,
        0.8,
        {
          scale: 1.3,
          ease: "elastic.out(5, 1)"
        },
        0.1
      )
      .to(
        this.crcSm.nativeElement,
        0.6,
        {
          ease: "power4",
          fill: this.colBg
        },
        0.1
      )
      .to(
        this.brgr.nativeElement,
        0.3,
        {
          x: -brgrShft,
          y: -brgrShft
        },
        0.2
      )
      .to(
        this.brgrTop.nativeElement,
        0.2,
        {
          y: brgrRt
        },
        0.1
      )
      .to(
        this.brgrBot.nativeElement,
        0.2,
        {
          y: -brgrRt
        },
        0.1
      )
      .to(
        this.brgrTop.nativeElement,
        0.4,
        {
          rotation: 45,
          stroke: "#fff"
        },
        0.1
      )
      .to(
        this.brgrMid.nativeElement,
        0.4,
        {
          rotation: 45,
          stroke: "rgba(255,255,255,0)"
        },
        0.1
      )
      .to(
        this.brgrBot.nativeElement,
        0.4,
        {
          rotation: -45,
          stroke: "#fff"
        },
        0.1
      )
      .to(
        this.crcArc.nativeElement,
        0.4,
        {
          x: 0,
          y: 0,
          ease: "power3"
        },
        0.2
      )
      .to(
        this.crcArc.nativeElement,
        0.3,
        {
          strokeDasharray: "85, 275",
          strokeDashoffset: "-186"
        },
        0.6
      )
      .to(
        this.linkCdpn.nativeElement,
        0.25,
        {
          x: -190,
          y: -40,
          ease: "power1"
        },
        "-=0.75"
      )
      .to(
        this.linkDrbl.nativeElement,
        0.25,
        {
          x: -138,
          y: -138,
          ease: "power1"
        },
        "-=0.65"
      )
      .to(
        this.linkTwtr.nativeElement,
        0.25,
        {
          x: -40,
          y: -190,
          ease: "power1"
        },
        "-=0.55"
      )
      .set(this.brgrBot.nativeElement, {
        onComplete: this.onComplete.bind(this)
      })
      .pause();
    return tl;
  }

  menuOff(tl = new TimelineMax()) {
    tl.to(this.linkTwtr.nativeElement, 0.25, {
      x: 0,
      y: 0,
      ease: "power2.in"
    })
      .to(
        this.linkDrbl.nativeElement,
        0.25,
        {
          x: 0,
          y: 0,
          ease: "power2.in"
        },
        "-=0.1"
      )
      .to(
        this.linkCdpn.nativeElement,
        0.25,
        {
          x: 0,
          y: 0,
          ease: "power2.in"
        },
        "-=0.1"
      )
      .to(
        this.crcBg.nativeElement,
        0.55,
        {
          scale: 1,
          ease: "back.in(3)"
        },
        0.05
      )
      .to(
        this.crcSm.nativeElement,
        0.45,
        {
          fill: "#fff",
          ease: "power4.in"
        },
        0.15
      )
      .to(
        this.crcSm.nativeElement,
        0.45,
        {
          scale: 1,
          ease: "back.in(3)"
        },
        0.15
      )
      .to(
        this.crcSd.nativeElement,
        0.45,
        {
          scale: 1,
          ease: "back.in(3)"
        },
        0.15
      )
      .to(
        this.crcArc.nativeElement,
        0.4,
        {
          strokeDasharray: "0, 359",
          strokeDashoffset: "-240"
        },
        0.1
      )
      .set(
        this.crcArc.nativeElement,
        {
          strokeDasharray: "10, 350",
          strokeDashoffset: "-230",
          x: 120,
          y: 120
        },
        0.51
      )
      .to(
        this.brgr.nativeElement,
        0.4,
        {
          x: 0,
          y: 0,
          ease: "power1.in"
        },
        0.2
      )
      .to(
        this.brgrTop.nativeElement,
        0.3,
        {
          rotation: 0,
          stroke: this.colBg,
          ease: "power1.in"
        },
        0.2
      )
      .to(
        this.brgrMid.nativeElement,
        0.3,
        {
          rotation: 0,
          stroke: this.colBg,
          ease: "power1.in"
        },
        0.2
      )
      .to(
        this.brgrBot.nativeElement,
        0.3,
        {
          rotation: 0,
          stroke: this.colBg,
          ease: "power1.in"
        },
        0.2
      )
      .to(
        this.brgrTop.nativeElement,
        0.1,
        {
          y: 0
        },
        0.5
      )
      .to(
        this.brgrBot.nativeElement,
        0.1,
        {
          y: 0
        },
        0.5
      )
      .set(this.brgrBot.nativeElement, {
        onComplete: this.onComplete.bind(this)
      })
      .pause();
    return tl;
  }

  onComplete() {
    this.time = true;
  }
  games() {
    console.log("juegos");
  }
  login() {
    this.OisWelcome.emit(false);
  }

  toggle() {
    if (this.time) {
      this.time = false;
      this.on ? this.menuOff().play(0) : this.menuOn().play(0);
      this.on = !this.on;
    }
  }
}
