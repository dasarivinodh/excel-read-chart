import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label, Color } from "ng2-charts";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"]
})
export class DoughnutChartComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ["Have Test Cases", "No Test Cases"];
  public doughnutChartData: MultiDataSet = [[350, 450]];
  public doughnutChartType: ChartType = "doughnut";
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: ["RED", "GREEN"]
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log("loading");
  }

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
