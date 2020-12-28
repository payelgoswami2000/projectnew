import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // userprofile:any;

  constructor() { }

  ngOnInit(): void {
  //   this.userprofile=this.strseivice.getAllData();
  //    console.log(this.userprofile);
  // }

}
}
