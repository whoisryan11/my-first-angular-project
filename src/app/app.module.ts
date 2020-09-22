import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http'
import { PseudoServiceService } from './pseudo-service.service';
import { CRUDComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    HighlightDirective,
    CRUDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PseudoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
