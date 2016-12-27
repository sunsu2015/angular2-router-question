//module2/index.ts
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Module2Component} from './module2.component';
import {Module4Component} from '../module4/module4.component';
let Route = [
  {path:'',component:Module2Component}
]
@NgModule({
  imports: [
    RouterModule.forChild(Route)
  ],
  declarations: [Module2Component,Module4Component]
})
export class Module2 { }
