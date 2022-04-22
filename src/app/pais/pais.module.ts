import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisSearchComponent } from './components/pais-search/pais-search.component';
import { CapitalTablaComponent } from './components/capital-tabla/capital-tabla.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisSearchComponent,
    CapitalTablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent
  ]
})
export class PaisModule { }
