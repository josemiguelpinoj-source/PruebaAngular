import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import Swal from 'sweetalert2'; 

@Component({ 
  selector: 'app-lista-inscritos', 
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './lista-inscritos.component.html', 
  styleUrl: './lista-inscritos.component.css' 
}) 
export class ListaInscritosComponent implements OnInit { 
  inscritos: any[] = []; 

  ngOnInit() { 
    this.cargarInscritos(); // Ejecuta la lectura del almacenamiento local 
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

  // 🔥 NUEVA FUNCIÓN PARA ELIMINAR CON SWEETALERT2
  eliminarInscrito(index: number) { 
    // Obtenemos el usuario de la lista usando su posición
    const usuario = this.inscritos[index];

    // Lanzamos la ventana emergente de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      html: `¿Deseas eliminar a <b>${usuario.nombre}</b> de la lista de inscritos?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#ffc107',
      cancelButtonColor: '#dc3545',
      background: '#212529',
      color: '#ffffff'
    }).then((result) => {
      // Si el usuario confirma la acción
      if (result.isConfirmed) {
        // 1. Eliminamos el alumno usando su posición en la tabla 
        this.inscritos.splice(index, 1); 

        // 2. Guardamos la lista actualizada en el LocalStorage 
        localStorage.setItem('usuariosInscritos', JSON.stringify(this.inscritos)); 

        // 3. Recargamos la vista visual inmediatamente 
        this.cargarInscritos(); 

        // 4. Mostramos una alerta de éxito final
        Swal.fire({
          title: '¡Eliminado!',
          text: `${usuario.nombre} ha sido borrado correctamente.`,
          icon: 'success',
          confirmButtonColor: '#ffc107',
          background: '#212529',
          color: '#ffffff'
        });
      }
    });
  } 
} // <-- Llave de cierre final del componente
