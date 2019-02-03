import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualDistributionComponent } from './manual-distribution/manual-distribution.component';


const routes: Routes = [
  {path:'manualDistribution', component:ManualDistributionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ManualDistributionComponent]
