import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ListaInscritosComponent } from './lista-inscritos.component';
import Swal from 'sweetalert2';

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

  it('should call Swal.fire with text parameter safely when deleting a user (XSS prevention)', () => {
    const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: false } as any));
    component.inscritos = [
      { nombre: '<img src=x onerror=alert(1)>', rutina: 'Cardio', horario: '07:00 - 09:00', email: 'test@example.com' }
    ];

    component.eliminarInscrito(0);

    expect(swalSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar a <img src=x onerror=alert(1)> de la lista de inscritos?'
    }));
  });
});
