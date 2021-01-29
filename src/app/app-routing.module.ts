import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GstlistComponent } from './gstlist/gstlist.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'gstlist',component: GstlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
