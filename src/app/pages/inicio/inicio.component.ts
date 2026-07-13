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
    // Recuerda escribir "admin" en minúsculas y contraseña "12345678"
    if (this.usuario.trim() === 'admin' && this.password === '12345678') {
      this.error = ''; 
       // 🔑 GUARDAMOS EL ESTADO DE LA SESIÓN ASIGNANDO 'true'
      localStorage.setItem('isLoggedIn', 'true');
      
      // 3. Redireccionamos a la ruta del formulario que configuramos en las rutas ('inscripcion')
      this.router.navigate(['/inscripcion']); 
      
    } else {
      this.error = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
  }
}