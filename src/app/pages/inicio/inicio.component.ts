import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

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

  // SECURITY: Expected SHA-256 hash of the admin password ('Admin123.') to avoid storing plaintext secrets.
  private readonly expectedPasswordHash = 'f4035833cb911a3e8634903e498ff84b05d4b66f73c6155af3f58b22ad3503f4';

  constructor(private router: Router) {}

  private async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async login() {
    const regexSegura = /^[A-Z].*[\W_].*$/;

    if (!regexSegura.test(this.password)) {
      this.error = 'La contraseña debe iniciar con mayúscula y contener al menos un signo especial.';
      return;
    }

    const inputHash = await this.hashPassword(this.password);

    // SECURITY: Compare hashed inputs rather than plaintext passwords
    if (this.usuario.trim() === 'admin' && inputHash === this.expectedPasswordHash) {
      this.error = '';
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/inscripcion']);
    } else {
      this.error = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
  }
}
