import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ManualDistributionComponent } from './manual-distribution/manual-distribution.component';
import { AutomaticTableComponent } from './manual-distribution/automatic-table/automatic-table.component';
import { ManualTableComponent } from './manual-distribution/manual-table/manual-table.component';

 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ManualDistributionComponent,
    AutomaticTableComponent,
    ManualTableComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
