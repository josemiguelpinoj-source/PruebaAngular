import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
// <-- 1. IMPORTANTE: Importamos esto para que funcione el botón del HTML

@Component({
  selector: 'app-lista-inscritos',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  // <-- 2. IMPORTANTE: Agregado aquí también
  templateUrl: './lista-inscritos.component.html',
  styleUrl: './lista-inscritos.component.css'
})
export class ListaInscritosComponent implements OnInit { 
  inscritos: any[] = []; 

  ngOnInit() { 
    this.cargarInscritos(); 
    // Ejecuta la lectura del almacenamiento local
  } 

  // 📝 Creamos la función para leer los datos de forma reutilizable
  cargarInscritos() {
    const datosLocal = localStorage.getItem('usuariosInscritos'); 
    if (datosLocal) { 
      this.inscritos = JSON.parse(datosLocal); 
    } else {
      this.inscritos = [];
    }
  }

  // 🔥 FUNCIÓN PARA ELIMINAR (Ahora sí está ubicada correctamente ADENTRO de la clase)
  eliminarInscrito(index: number) { 
    const seguro = confirm('¿Estás seguro de que deseas eliminar este usuario inscrito?'); 
    
    if (seguro) { 
      // 1. Eliminamos el alumno usando su posición en la tabla
      this.inscritos.splice(index, 1); 
      
      // 2. Guardamos la lista actualizada en el LocalStorage
      localStorage.setItem('usuariosInscritos', JSON.stringify(this.inscritos)); 
      
      // 3. Recargamos la vista visual inmediatamente
      this.cargarInscritos(); 
    } 
  } 
} // <-- Llave de cierre final del componente