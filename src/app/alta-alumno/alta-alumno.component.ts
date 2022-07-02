import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ok: boolean = false;
  submit: boolean = false;

  formularioAlumno = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    edad: ['', [Validators.min(18), Validators.max(80)]],
    mail: ['', [Validators.required, Validators.email]],
    materia: ['', [Validators.required]]
  });
  
  ngOnInit(): void {
  }

  submitAlumno() {
    this.ok = true;
    this.submit = true;
      this.ok = this.ok && !this.cNombre?.errors;
      this.ok = this.ok && !this.cApellido?.errors;
      this.ok = this.ok && !this.cEdad?.errors;
      this.ok = this.ok && !this.cMail?.errors;

  }

  get cNombre() {
    return this.formularioAlumno?.get('nombre');
  }

  get cApellido() {
    return this.formularioAlumno?.get('apellido');
  }

  get cEdad() {
    return this.formularioAlumno?.get('edad');
  }

  get cMail() {
    return this.formularioAlumno?.get('mail');
  }
}
