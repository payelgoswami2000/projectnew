import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regisForm:FormGroup;
  logindataB:any;
  errorBlock:any;
  
 
  constructor(private fb:FormBuilder,private service:TestService,private router:Router, private strseivice:SessionService) { }
  loginUser():void{
    let logobj=this.regisForm.value;
    this.service.loginData(logobj).subscribe((loginuser)=>{
      this.logindataB=loginuser;
      alert(this.logindataB.message);
      // console.log(this.logindataB.data.token);

      this.strseivice.setLoginResponse(
       
        this.logindataB.data.firstname,
        this.logindataB.data.lastname,
        this.logindataB.data.token,
      )

     
      this.router.navigate(['/ddboard'])
      // location.reload();
      console.log(this.logindataB);



    },
    (error)=>{
      this.errorBlock=error
       .error.message;
      alert(this.errorBlock)
      
      console.log(this.errorBlock);
     } )

  }



  ngOnInit(): void {
    
    // this.regisForm= new FormGroup({
    
      
    //   email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
   
    //   password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')])
    
      
    //  });
    this.regisForm=this.fb.group({

      email:[null,Validators.required],
      password:[null,Validators.required]
    })
    
  }
 
}
