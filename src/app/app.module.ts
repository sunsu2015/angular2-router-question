import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Router} from '@angular/router';
import { AppComponent } from './app.component.ts';
import { AppState } from './app.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',loadChildren:'./login/index#Login'},
      {path:'home',loadChildren:'./home/index#Home'},
    ])
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
