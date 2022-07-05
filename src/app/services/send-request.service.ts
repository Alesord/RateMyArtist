import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Artista } from '../models/artista.model';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(private http: HttpClient) { }

  OnSendRequest(artistaToAdd) {
    this.http.post('https://ratemyartist-880cd-default-rtdb.firebaseio.com/artistasDB.json', artistaToAdd).subscribe({next: (respuestaData => {
      alert('Artista subido correctamente');
      console.log(respuestaData);
      })
    })
  }

OnGetRequest(array) {
  this.http.get('https://ratemyartist-880cd-default-rtdb.firebaseio.com/artistasDB.json').pipe(map(responseData => {
    for (const key in responseData){
      if (responseData.hasOwnProperty(key)){
        array.push({ ...responseData[key], id: key})
      }
    }
    array = array.sort((a: Artista, b: Artista) => b.canciones.puntuacion - a.canciones.puntuacion)
  })).subscribe()
}

OnGetRequestExpanded(id: string):Observable<Artista> {
  return this.http.get<Artista>('https://ratemyartist-880cd-default-rtdb.firebaseio.com/artistasDB/' + id + '.json')
}

OnUpdateRequest(artistaToAdd: Artista, idArtista):Observable<Artista | string> {
  return this.http.put<Artista | string>('https://ratemyartist-880cd-default-rtdb.firebaseio.com/artistasDB/' + idArtista + '.json', artistaToAdd)
}

OnDeleteRequest(id: string):Observable<string> {
  return this.http.delete<string>('https://ratemyartist-880cd-default-rtdb.firebaseio.com/artistasDB/' + id + '.json')
}

}
