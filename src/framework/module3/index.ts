//module3/index.ts
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { Module3Component } from './module3.component.ts';
import {Module4Component} from '../module4/module4.component.ts';
let Route = [
  {path:'',component:Module3Component}
]
@NgModule({
  imports: [
    RouterModule.forChild(Route),
  ],
  declarations: [Module3Component,Module4Component]
})
export class Module3 { }
