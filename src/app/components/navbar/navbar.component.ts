import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // <-- Asegúrate de tener Router importado aquí

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // <-- Módulo para que funcionen los routerLink del HTML
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) {}

  // Esta es la función que ejecuta tu botón al hacer clic
  cerrarSesion() {
    // 🗑️ BORRAMOS EL ESTADO DE LA SESIÓN AL SALIR
    localStorage.removeItem('isLoggedIn');

    // Redirige al usuario de vuelta a la pantalla de login (ruta raíz)
    this.router.navigate(['/']);
  }
}