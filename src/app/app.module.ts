import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http'
import { PseudoServiceService } from './pseudo-service.service';
import { CRUDComponent } from './crud/crud.component';
import { RouterModule} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const route = [
  { path: 'clock', component: NewComponentComponent},
  { path: 'posts', component: CRUDComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    HighlightDirective,
    CRUDComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [PseudoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
