import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquineroComponent } from './esquinero.component';

describe('EsquineroComponent', () => {
  let component: EsquineroComponent;
  let fixture: ComponentFixture<EsquineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
