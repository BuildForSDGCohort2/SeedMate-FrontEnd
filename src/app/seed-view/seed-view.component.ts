import { Component, OnInit, Input } from "@angular/core";

@Component({
        selector: "app-seed-view",
        templateUrl: "./seed-view.component.html",
        styleUrls: ["./seed-view.component.css"]
})
export class SeedViewComponent implements OnInit {
  @Input () seed:any;
  constructor() { }

  ngOnInit(): void {
  }

}
