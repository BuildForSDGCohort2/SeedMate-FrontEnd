import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent }   from './components/landing/landing.component';
import { MainAppComponent }   from './components/main-app/main-app.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'main-app', component: MainAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingComponent, MainAppComponent]