import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CerCartaService {
 
  constructor(private http: HttpClient) { }

  searchCarta(id:string) {
    const url = `https://api.pokemontcg.io/v2/cards/${id}`;
    let obsProduct = this.http.get(url);
    console.log(obsProduct);
    return obsProduct;
  }
  
}
