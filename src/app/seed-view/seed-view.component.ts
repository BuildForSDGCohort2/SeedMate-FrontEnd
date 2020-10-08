import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
    selector: "app-seed-view",
    templateUrl: "./seed-view.component.html",
    styleUrls: ["./seed-view.component.css"]
})
export class SeedViewComponent implements OnInit {
  @Input () seed:any;

  seeds:any;
  constructor(public apiService: ApiService) {
      apiService;
  }

  ngOnInit(): void {
      this.apiService.getSeeds().subscribe((data)=>{
          console.log(data);
          this.seeds = data["0"];
      });
  }

}
