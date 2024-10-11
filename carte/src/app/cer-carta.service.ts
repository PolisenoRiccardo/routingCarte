import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CerCartaService {

  constructor(private http: HttpClient) { }

  searchCarta(id:string) {
    const url = `https://api.pokemontcg.io/v2/cards/${id}`;
    let obsCarta = this.http.get(url);
    console.log(obsCarta);
    return obsCarta;
  }

  esploraCarte(query:string) {
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${query}`;
    let obsCarta = this.http.get(url);
    console.log(obsCarta);
    return obsCarta;
  }

}
