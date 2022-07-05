import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Artista } from 'src/app/models/artista.model';
import { SendRequestService } from 'src/app/services/send-request.service';

@Component({
  selector: 'app-expand-edit',
  templateUrl: './expand-edit.component.html',
  styleUrls: ['./expand-edit.component.css'],
  providers: [SendRequestService]
})
export class ExpandEditComponent implements OnInit {
  @Output() artistaData: Artista;
  @Output() artistaEmit: EventEmitter<Artista> = new EventEmitter();
  
  @Input() editBoxToggled: boolean = false;
  @Input() identifierIn;
  @Input () artistaEdit: Artista;

  artistForm: FormGroup;

  constructor(private sendRequestService: SendRequestService,) { }


  ngOnInit(): void {
    this.artistForm = new FormGroup({
      nombreArtista: new FormControl(null, Validators.required),
      nacionalidad: new FormControl(null, Validators.required),
      foto: new FormControl(null, Validators.required),
      nombreCancion: new FormControl(null, Validators.required),
      puntuacion: new FormControl(null, [Validators.required, Validators.max(5), Validators.min(0)])
    })
    this.updateForm();
  }

  updateForm(){
  }

  OnSubmitUpdate(){
  }

  OnSubmit(){
    this.artistaData = {
      nombre: this.artistForm.value.nombreArtista,
      nacionalidad: this.artistForm.value.nacionalidad,
      foto: this.artistForm.value.foto,
      canciones: {
        nombre: this.artistForm.value.nombreCancion,
        puntuacion: this.artistForm.value.puntuacion
      }
    }
    this.OnSubmitEmit()
    this.artistForm.reset();
    alert('Artista actualizado correctamente.')
  }
  
  OnSubmitEmit(){
    this.sendRequestService.OnUpdateRequest(this.artistaData, this.identifierIn).subscribe({next: () => {
    this.artistaEmit.emit(this.artistaData)
    }})
}


}
