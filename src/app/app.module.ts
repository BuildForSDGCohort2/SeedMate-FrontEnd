import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { seedData } from "./sdata.service";
import { SeedViewComponent } from "./seed-view/seed-view.component";
import { ContactComponent } from "./components/contact/contact.component";


@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        SeedViewComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ seedData],
    bootstrap: [AppComponent]
})
export class AppModule { }
