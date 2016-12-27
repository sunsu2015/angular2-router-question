//module3/index.ts
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login.component.ts';
let Route = [
  {path:'',component:LoginComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(Route),
  ],
  declarations: [LoginComponent]
})
export class Login { }
