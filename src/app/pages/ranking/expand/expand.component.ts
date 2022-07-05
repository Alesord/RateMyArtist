import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artista } from 'src/app/models/artista.model';
import { SendRequestService } from 'src/app/services/send-request.service';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.css'],
  providers: [SendRequestService]
})
export class ExpandComponent implements OnInit {

  identifier: string;
  editmode: boolean = false
  artistaExpanded: Artista;
  artistaUpdated: Artista;

  constructor(private rutaActiva: ActivatedRoute, private sendRequestService: SendRequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnChanges () {
    
  }

  ngOnInit(): void {
    this.identifier = this.rutaActiva.snapshot.paramMap.get('id')
    
    this.sendRequestService.OnGetRequestExpanded(this.identifier).subscribe({next: (artista: Artista) => {
      this.artistaExpanded = artista;
      console.log(this.artistaExpanded.nombre);
    }})

  }

  
  redondear(x:number) {
    return Math.floor(x)
  }

  toggleEditMode(){
    this.editmode = !this.editmode
  }
  
  artistaUpdate(artista: Artista){
    this.artistaExpanded = artista;
  }

  OnDelete(){
    this.sendRequestService.OnDeleteRequest(this.identifier).subscribe()
    alert('Artista eliminado correctamente.');
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  
}
