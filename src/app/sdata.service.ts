import { Injectable } from "@angular/core";
/*import { Template } from "./seedTempl";*/

@Injectable({
    providedIn: "root"
})
export class seedData {
    getData() {
        return Seeds;
    }
}
const Seeds = [
    {
        Name: "Apple",
        SeedDepth: "4 mm",
        SeedSpacing: "10 cm",
        Season: "Summer",
        SeedSRC: "../assets/Apple.jpg"
    
      
    },
    {
        Name: "Squash",
        SeedDepth: "4 cm",
        SeedSpacing: "50 cm",
        Season: "Spring",
        SeedSRC: "../assets/Apple.jpg"
    },
    {
        Name: "Cauliflower",
        SeedDepth: "10 mm",
        SeedSpacing: "20 cm",
        Season: "Winter",
        SeedSRC: "../assets/Apple.jpg"
    },
    {
        Name: "Onion",
        SeedDepth: "20 mm",
        SeedSpacing: "15 cm",
        Season: "Spring",
        SeedSRC: "../assets/Apple.jpg"
    },

];

