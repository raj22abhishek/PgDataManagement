import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { InputformComponent } from './inputform/inputform.component';
import { DetailsComponent } from './details/details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';


const routes: Routes = [
  { path: 'registerform', component: RegisterPageComponent },
  { path: 'home', component: HomeComponent },
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'inputform/:id', component: InputformComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'editdetails/:building/:room/:name/:Aadhar/:Pan/:id', component: EditDetailsComponent },
  
  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
