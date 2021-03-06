import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SampletableComponent } from './sampletable/sampletable.component';
import { ManualTableComponent } from './manual-table/manual-table.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SampletableComponent,
    ManualTableComponent,
    routingComponents
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
