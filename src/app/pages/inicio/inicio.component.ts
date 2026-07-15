import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; // 1. IMPORTANTE: Importamos el Router para poder cambiar de página

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
  usuario = '';
  password = '';
  error = '';

  // 2. Inyectamos el servicio Router en el constructor
  constructor(private router: Router) {}

  login() {
    const regexSegura = /^[A-Z].*[\W_].*$/;

    if (!regexSegura.test(this.password)) {
      this.error = 'La contraseña debe iniciar con mayúscula y contener al menos un signo especial.';
      return;
    }

    if (this.usuario.trim() === 'admin' && this.password === 'Admin123.') {
      this.error = '';
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/inscripcion']);
    } else {
      this.error = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
  }
}