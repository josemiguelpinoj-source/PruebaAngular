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

  it('should escape HTML characters in user name before displaying confirmation dialog', () => {
    const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: false } as any));
    component.inscritos = [
      { nombre: '<img src=x onerror=alert(1)> & "Admin"', rutina: 'Cardio', horario: '07:00 - 09:00', email: 'test@test.com' }
    ];

    component.eliminarInscrito(0);

    expect(swalSpy).toHaveBeenCalled();
    const callArgs = swalSpy.calls.mostRecent().args[0] as any;
    expect(callArgs.html).toContain('&lt;img src=x onerror=alert(1)&gt; &amp; &quot;Admin&quot;');
    expect(callArgs.html).not.toContain('<img src=x');
  });
});
