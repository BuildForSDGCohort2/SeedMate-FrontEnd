import { Component} from "@angular/core";
import { seedData } from "../../sdata.service";
import { Template } from "../../seedTempl";
/*import { SeedViewComponent } from "../../seed-view/seed-view.component";*/

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
.material-icons {
    font-size:80px; 
    color:gray; 
    opacity:0.4;
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

input {
    width:100%; 
    height:100%;
}

@media screen and (max-width: 780px){
    app-seed-view {
        margin: 0% !important;
    }

    #main-cont{
        height:55vh;
    }

    .material-icons {
        font-size:40px; 
    }

    #s-text{
        width:10%;
        font-size: 10px;
        border-right: none;
    }
    
    input{
        width:70%; 
        height:50%;
        margin-left: 50px;
    }
    
    #search {
        width: 90vw;
        height: 10vh;
        justify-content: space-between;
    }
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
    constructor(public SedTa:seedData) {
        SedTa;
    }
    
  Seedta = this.SedTa.getData();

}
