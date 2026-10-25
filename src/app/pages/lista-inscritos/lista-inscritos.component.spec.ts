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

  it('should escape HTML characters in user name to prevent XSS when calling eliminarInscrito', () => {
    const swalSpy = spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: false } as any));

    component.inscritos = [{
      nombre: '<script>alert("xss")</script>',
      rutina: 'Cardio',
      horario: '07:00 - 09:00',
      email: 'test@example.com'
    }];

    component.eliminarInscrito(0);

    expect(swalSpy).toHaveBeenCalled();
    const swalArgs = swalSpy.calls.mostRecent().args[0] as any;
    expect(swalArgs.html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    expect(swalArgs.html).not.toContain('<script>');
  });
});
