import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CerCartaService } from '../cer-carta.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  routeObs !: Observable<ParamMap>; 
  obsCarta !: Observable<Object>;
  results: any;

  constructor
  (
    public chiediCarta: CerCartaService, 
    private route: ActivatedRoute
  ) {}
    
  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
    {
      let cardId = params.get('id') || ''; 
      this.obsCarta = this.chiediCarta.searchCarta(cardId);
      this.obsCarta.subscribe((data) => { this.results = data; console.log(this.results)});
    }
}

