import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from './app.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { ScreenSaverComponent } from './components/screen-saver/screen-saver.component';
import { MenuComponent } from './components/menu/menu.component';
import { SlideComponent } from './components/slide/slide.component';
import { EsquineroComponent } from './components/esquinero/esquinero.component';

import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { DragScrollComponent, DragScrollModule } from "ngx-drag-scroll";


import { TituloComponent } from "./components/titulo/titulo.component";
import { CategoriaComponent } from "./components/categoria/categoria.component";
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { EntradaComponent } from './components/entrada/entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    PuestoComponent,
    ScreenSaverComponent,
    MenuComponent,
    SlideComponent,
    EsquineroComponent,
    OrdenesComponent,
    TituloComponent,
    CategoriaComponent,
    MenuListComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    DragScrollModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
