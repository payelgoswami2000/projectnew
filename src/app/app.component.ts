import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpreq';
  constructor(private router:Router,private strseivice:SessionService){}
  // clickme(){
  //   this.strseivice.removeStroage();
  //  this.router.navigate(['/login'])
  // }
}
