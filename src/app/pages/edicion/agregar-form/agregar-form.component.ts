import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artista } from 'src/app/models/artista.model';
import { SendRequestService } from 'src/app/services/send-request.service';

@Component({
  selector: 'app-agregar-form',
  templateUrl: './agregar-form.component.html',
  styleUrls: ['./agregar-form.component.css'],
  providers: [SendRequestService]
})
export class AgregarFormComponent implements OnInit {

  artistForm: FormGroup;
  constructor(private sendRequest: SendRequestService) { }

  ngOnInit(): void {
    this.artistForm = new FormGroup({
      nombreArtista: new FormControl(null, Validators.required),
      nacionalidad: new FormControl(null, Validators.required),
      foto: new FormControl(null, Validators.required),
      nombreCancion: new FormControl(null, Validators.required),
      puntuacion: new FormControl(null, [Validators.required, Validators.max(5), Validators.min(0)])
    })

    console.log('Esto es' + this.artistForm.get('nombreArtista').valid);
  }


  OnSubmit(){
    const artistaData: Artista = {
      nombre: this.artistForm.value.nombreArtista,
      nacionalidad: this.artistForm.value.nacionalidad,
      foto: this.artistForm.value.foto,
      canciones: {
        nombre: this.artistForm.value.nombreCancion,
        puntuacion: this.artistForm.value.puntuacion
      }
    }
    this.sendRequest.OnSendRequest(artistaData);
    this.artistForm.reset();
  }

}
