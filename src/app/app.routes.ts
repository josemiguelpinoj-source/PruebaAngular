import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component'; 
import { FormularioComponent } from './pages/formulario-inscripcion/formulario-inscripcion.component'; 
import { ListaInscritosComponent } from './pages/lista-inscritos/lista-inscritos.component';
import { AboutComponent } from './pages/about/about.component';
import { authGuard } from './guards/auth.guard'; // <-- IMPORTA EL GUARD

export const routes: Routes = [
  { path: '', component: InicioComponent },
  
  // 🔒 Rutas protegidas con el Guard
  { path: 'inscripcion', component: FormularioComponent, canActivate: [authGuard] },
  { path: 'usuarios', component: ListaInscritosComponent, canActivate: [authGuard] },
  
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];