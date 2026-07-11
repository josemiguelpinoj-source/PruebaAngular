import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-inscripcion.component.html'
})
export class FormularioComponent {
  nombre = '';
  rutina = '';
  horario = '';
  email = '';

  datosGuardados: any = null;
  inscripcionCreada = output<any>();

  enviar(form: NgForm) {
    if (form.valid) {
      const nuevoInscrito = {
        nombre: this.nombre,
        rutina: this.rutina,
        horario: this.horario,
        email: this.email
      };

      // 1. Obtener la lista actual de alumnos del LocalStorage
      const datosLocales = localStorage.getItem('usuariosInscritos');
      let listaAlumnos: any[] = [];

      if (datosLocales) {
        listaAlumnos = JSON.parse(datosLocales);
      }

      // 2. VALIDACIÓN CONTROL DE DUPLICADOS 🚫
      const emailExiste = listaAlumnos.some(alumno => 
        alumno.email.toLowerCase() === nuevoInscrito.email.toLowerCase()
      );

      const horarioOcupado = listaAlumnos.some(alumno => 
        alumno.rutina === nuevoInscrito.rutina && alumno.horario === nuevoInscrito.horario
      );

      if (emailExiste) {
        alert('❌ Error: Este correo electrónico ya se encuentra registrado en el sistema.');
        return; // Detiene la ejecución
      }

      if (horarioOcupado) {
        alert(`❌ Error: El horario ${nuevoInscrito.horario} ya está colapsado para la rutina de ${nuevoInscrito.rutina}.`);
        return; // Detiene la ejecución
      }

      // 3. SI PASA LAS VALIDACIONES, SE GUARDA
      this.datosGuardados = nuevoInscrito;
      listaAlumnos.push(nuevoInscrito);
      localStorage.setItem('usuariosInscritos', JSON.stringify(listaAlumnos));

      this.inscripcionCreada.emit(this.datosGuardados);

      // Reiniciar el formulario de forma limpia
      form.resetForm({
        nombre: '',
        rutina: '',
        horario: '',
        email: ''
      });
    }
  }
}