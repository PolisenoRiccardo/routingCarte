import { Component } from '@angular/core';
import { CerCartaService } from '../cer-carta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent {
  query !: string;
  obsCarta !: Observable<Object>;
  results: any;
  
  constructor(public esploraCarta: CerCartaService) { }

  submit(query: HTMLInputElement): void {
    this.query = query.value;
    this.obsCarta = this.esploraCarta.esploraCarte(this.query);
      this.obsCarta.subscribe((data) => { this.results = data; console.log(this.results)});
  }
}
