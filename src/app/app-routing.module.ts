import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {FirstStepComponent} from './first-step/first-step.component';
import {SecStepComponent} from './sec-step/sec-step.component';


const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'first-step' , component: FirstStepComponent },
  {path: 'sec-step' , component: SecStepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
