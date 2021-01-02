import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-ddboard',
  templateUrl: './ddboard.component.html',
  styleUrls: ['./ddboard.component.css']
})
export class DdboardComponent implements OnInit {
  loginFormValue: FormGroup;
  empprofile: any;

  constructor(private router: Router, private service: TestService, private strseivice: SessionService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.loginFormValue = this.fb.group({
      fname: [null , [Validators.required, Validators.pattern('^[A-Za-z  ]+$')]],
      lname: [null, Validators.required],
      address: [null, Validators.required]

  });
  }
  employeedetails() {
    const empobj = this.loginFormValue.value;
    console.log(empobj);
    this.service.fillUpData(empobj).subscribe((userInfo) => {
      this.empprofile = userInfo;
      console.log(this.empprofile);
      this.router.navigate(['/home']);
    });

  }

}
