/**
 * Created by sunsu on 2016/12/24.
 */
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import {HomeComponent} from "./home.component";
import {MenuComponent} from "../menu/menu.component";
export let ROUTES = [
    {path:'',component:HomeComponent},
    {path:'m2',loadChildren:'../module2/index#Module2'},
    {path:'m3',loadChildren:'../module3/index#Module3'}
  ];
@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ],

})
export class Home { };
