import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm: FormGroup;
  rData: any;
  err: any;

  constructor(private fb: FormBuilder, private service: TestService , private router: Router) { }
  loginUser(): void {
    const formobj = this.loginForm.value;
    this.service.registerData(formobj).subscribe(
      (userinfo) => {
      this.rData = userinfo;
      alert(this.rData.message);
      console.log(this.rData);
      this.router.navigate(['/login']);


    },
    (error) => {
      this.err = error.error.message;
      alert(this.err);

      console.log(this.err);


    });





  }

  ngOnInit(): void {
    // this.loginForm= new FormGroup({
    //   fname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z  ]+$")]),
    //    lname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z  ]+$")]),

    //    email:new FormControl(null,[Validators.required,Validators.pattern('^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$')]),
    // tslint:disable-next-line:max-line-length
    //    password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')])


    //   });
    this.loginForm = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

}
