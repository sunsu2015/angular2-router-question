
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'login.component.html',
})
export class LoginComponent {
  login(){
    console.log('aaaa');
    this.router.navigate(['/home'])
  }
  constructor(public router:Router) { }
}
