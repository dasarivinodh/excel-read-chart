import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import { TableModule } from "primeng/table";
import { ChartModule } from "primeng/chart";

@NgModule({
  declarations: [AppComponent, DoughnutChartComponent],
  imports: [BrowserModule, ChartsModule, TableModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
