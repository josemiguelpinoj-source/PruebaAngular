import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.esm.js';

import { ListaInscritosComponent } from './lista-inscritos.component';

describe('ListaInscritosComponent', () => {
  let component: ListaInscritosComponent;
  let fixture: ComponentFixture<ListaInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInscritosComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Swal.fire using safe text property in eliminarInscrito', () => {
    const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: false }) as any);
    component.inscritos = [{ nombre: '<script>alert(1)</script>', rutina: 'Cardio', horario: '07:00 - 09:00', email: 'test@example.com' }];

    component.eliminarInscrito(0);

    expect(swalSpy).toHaveBeenCalled();
    const args = swalSpy.calls.mostRecent().args[0] as any;
    expect(args.text).toBe('¿Deseas eliminar a <script>alert(1)</script> de la lista de inscritos?');
    expect(args.html).toBeUndefined();
  });
});
