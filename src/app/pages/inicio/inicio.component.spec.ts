import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should authenticate successfully with valid credentials and SHA-256 hash', async () => {
    spyOn(router, 'navigate');
    component.usuario = 'admin';
    component.password = 'Admin123.';

    await component.login();

    expect(component.error).toBe('');
    expect(localStorage.getItem('isLoggedIn')).toBe('true');
    expect(router.navigate).toHaveBeenCalledWith(['/inscripcion']);
  });

  it('should fail authentication with invalid credentials', async () => {
    component.usuario = 'admin';
    component.password = 'Wrong123.';

    await component.login();

    expect(component.error).toBe('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
  });
});
