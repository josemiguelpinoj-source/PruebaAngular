import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as cmp from './formulario-inscripcion.component';

// Support both named and default exports from the component file
const FormularioInscripcionComponent: any = (cmp as any).FormularioInscripcionComponent || (cmp as any).default;

describe('FormularioInscripcionComponent', () => {
  let component: any;
  let fixture: ComponentFixture<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioInscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
