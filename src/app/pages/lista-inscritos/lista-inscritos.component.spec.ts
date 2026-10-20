import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import Swal from 'sweetalert2';

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

  it('should escape HTML in user name when calling Swal.fire to prevent XSS', () => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: false } as any));

    component.inscritos = [
      { nombre: '<script>alert(1)</script>', rutina: 'Cardio', horario: '08:00', email: 'test@example.com' }
    ];

    component.eliminarInscrito(0);

    expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
      html: '¿Deseas eliminar a <b>&lt;script&gt;alert(1)&lt;/script&gt;</b> de la lista de inscritos?'
    }));
  });
});
