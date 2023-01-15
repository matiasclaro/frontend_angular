import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:portfolio/src/app/components/proyectos/proyectos.component.spec.ts
import { ProyectosComponent } from './proyectos.component';

describe('ProyectosComponent', () => {
  let component: ProyectosComponent;
  let fixture: ComponentFixture<ProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosComponent);
========
import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieComponent);
>>>>>>>> ad316ef6306869b8eda74a79df052c6e05000d23:portfolio/src/app/components/pie/pie.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
