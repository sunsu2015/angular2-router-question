import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(public appState: AppState,public router:Router){
    appState.login = (obj)=>{
      if(obj.account!='a' || obj.password!='a'){
        alert('账号密码错误！');
        return;
      }
      router.navigate(['/home']);
    }
  }
}
