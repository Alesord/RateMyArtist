import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendRequestService } from 'src/app/services/send-request.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [SendRequestService]
})
export class LeaderboardComponent implements OnInit {

  artistasListaShow = []
  IsSearchToggled: boolean = false;
  artistaBuscado: string;
  inputLive:string;
  matchCounter: number;

  @ViewChild('inputRef') inputSearch: ElementRef<HTMLInputElement>;

  constructor( private sendRequestService: SendRequestService, private router: Router, private route: ActivatedRoute ) { }



  ngOnInit(): void {
    this.sendRequestService.OnGetRequest(this.artistasListaShow);
  }

  redondear(x:number) {
    return Math.floor(x)
  }

  searchToggle() {
    this.IsSearchToggled = !this.IsSearchToggled
    this.inputSearch.nativeElement.value = ''
  }

  search() {
    this.artistaBuscado = this.inputSearch.nativeElement.value;
    this.matchCounter = 0;
    let artistaId;

    for (let artista of this.artistasListaShow) {
      if (artista.nombre == this.artistaBuscado) {
        this.matchCounter++
        artistaId = artista.id;
        console.log(this.matchCounter)
      }
    }
    if(this.matchCounter == 1){
      this.router.navigate(["../expand-artist", artistaId], { relativeTo: this.route })
    }

    
  }

  @Output() expandArtist(idValue: string) {
    console.log('This is ' + idValue);
    return idValue
  }



}
