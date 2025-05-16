import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  constructor(private router: Router) { }
  expediente = {
    unidad: '',
    fechaInicio: '',
    regEntrada: '',
    regOCCI: '',
    regEFTO: '',
    clasificacion: '',
    estado: '',
    organo: '',
    nombreCaso: '',
    trabajo: '',
    entidad: ''
  };

  // Opciones para los select
  unidades = ['Unidad 1', 'Unidad 2', 'Unidad 3'];
  clasificaciones = ['Clasificación A', 'Clasificación B', 'Clasificación C'];
  estados = ['Estado 1', 'Estado 2', 'Estado 3'];
  organos = ['Órgano 1', 'Órgano 2', 'Órgano 3'];
  trabajos = ['Trabajo 1', 'Trabajo 2', 'Trabajo 3'];
  entidades = ['Entidad 1', 'Entidad 2', 'Entidad 3'];

  onSubmit() {
    if (this.isFormValid()) {
      alert('Formulario enviado con exito !');
      this.expediente = {
        unidad: '',
        fechaInicio: '',
        regEntrada: '',
        regOCCI: '',
        regEFTO: '',
        clasificacion: '',
        estado: '',
        organo: '',
        nombreCaso: '',
        trabajo: '',
        entidad: ''
      };
      this.router.navigate(['/']);
    }
  }

  isFormValid(): boolean {
    return (
      !!this.expediente.unidad &&
      !!this.expediente.fechaInicio &&
      !!this.expediente.clasificacion &&
      !!this.expediente.estado &&
      !!this.expediente.organo &&
      !!this.expediente.nombreCaso &&
      !!this.expediente.trabajo &&
      !!this.expediente.entidad
    );
  }

  // Validación personalizada para el campo nombreCaso
  validateNombreCaso(): boolean {
    return this.expediente.nombreCaso.length >= 5 && this.expediente.nombreCaso.length <= 100;
  }

  // Validación para campos de registro (opcionales pero con formato si están presentes)
  validateRegistro(reg: string): boolean {
    if (!reg) return true; // Campo opcional
    return /^[A-Za-z0-9-]+$/.test(reg); // Solo letras, números y guiones
  }
}
