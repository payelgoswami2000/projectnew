import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdboardComponent } from './ddboard/ddboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
{ path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path:'profile',component:UserprofileComponent},
  {path:'Userdetails',component:UserdetailsComponent},
  {path:'',redirectTo:'registration',pathMatch:'full'},
  

  {path:'ddboard',component:DdboardComponent,
canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
