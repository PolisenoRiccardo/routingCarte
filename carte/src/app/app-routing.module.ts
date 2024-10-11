import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { CercaComponent } from './cerca/cerca.component';
const routes: Routes = [
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: 'carta/:id', component: CartaComponent },
  {path: 'cerca', component: CercaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
