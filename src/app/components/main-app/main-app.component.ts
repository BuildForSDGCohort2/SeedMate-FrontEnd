import { Component} from "@angular/core";
import { seedData } from "../../sdata.service";
import { Template } from "../../seedTempl";
import { SeedViewComponent } from "../../seed-view/seed-view.component";

@Component({
        selector: "app-main-app",
        templateUrl: "./main-app.component.html",
        styles: [`#search{
    width: 100vw;
    top:0;
    position:absolute;
    height: auto;
    display: flex;
    flex-direction:row;
    align-content: space-between;
    justify-content: center;
    background-color:#e6ffe6;
    opacity:0.2;
    transition-property: opacity 2s;

}
#search:hover{
    opacity:1;
}
#search button{
    color:#009900;
    font-size:large;
    height:auto;
    width:3%;
    background-color:inherit;
    border:none;
    margin: 0% 10% 0% 10% ;

}
#s-text{
    width:10%;
    border-right: 5px solid grey;
    color:gray;


}

#s-prompt{

    width:80%;

}
#s-prompt input{
    font-size:80px;
    border:none;
}
#s-img{
    width:10%;
}
#main-cont{
  height: 60vh;
  width:100%;
  justify-content: center;
  align-content:space-between;
  display:flex;
  border: 5px solid grey;
  position: relative;
  top: 100px;
}


`]
        /*styleUrls: ['./main-app.component.css']*/
})
export class MainAppComponent {
    Sdta: Template = {
        Name: "Apple",
        SeedDepth: "4 mm",
        SeedSpacing: "10 cm",
        Season: "Summer"
  };
  constructor(private SedTa:seedData) {
    
  }
  Seedta = this.SedTa.getData();

}
