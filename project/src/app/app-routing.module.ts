import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampletableComponent } from './sampletable/sampletable.component';
import { ManualTableComponent } from './manual-table/manual-table.component';

const routes: Routes = [
  {path :"automatedTable", component : SampletableComponent},
  {path :"manualTable", component : ManualTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SampletableComponent,ManualTableComponent]
