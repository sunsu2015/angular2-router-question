import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls:['menu.component.css']
})
export class MenuComponent {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  handleClick(e){
    switch (e.target.innerText){
      case 'm2':
        this.router.navigate(['./home/m2']);
        break;
      case 'm3':
        this.router.navigate(['./home/m3']);
        break;
    }
  }
}
