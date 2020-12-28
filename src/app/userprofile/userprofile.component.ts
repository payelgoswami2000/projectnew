import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  useprofile: any;

  constructor(private router: Router, private strseivice: SessionService) { }

  ngOnInit(): void {
    this.useprofile = this.strseivice.getAllData();
    console.log(this.useprofile);
  }

}
