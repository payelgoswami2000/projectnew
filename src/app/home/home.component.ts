import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userobj:any;
  store;

  constructor(private service:TestService,private router:Router, private strseivice:SessionService) { }

  ngOnInit(): void {
    this.service.getUserId().subscribe((fillInfo)=>{
      this.userobj=fillInfo;
      this.store=this.userobj.post[0].result;
      console.log(this.userobj);

    })
  }

}
