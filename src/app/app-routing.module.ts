import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent }   from "./components/landing/landing.component";
import { MainAppComponent }   from "./components/main-app/main-app.component";
import { ContactComponent }   from "./components/contact/contact.component";

const routes: Routes = [
        { path: "", component: LandingComponent},
        { path: "main-app", component: MainAppComponent},
        { path: "contact-us", component: ContactComponent}
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingComponent, MainAppComponent];