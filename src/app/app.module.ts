import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { seedData } from "./sdata.service";
import { SeedViewComponent } from "./seed-view/seed-view.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        SeedViewComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [ seedData],
    bootstrap: [AppComponent]
})
export class AppModule { }
