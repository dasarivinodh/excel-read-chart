import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label, Color } from "ng2-charts";
import readXlsxFile from "read-excel-file";
var configno = 0;
var configyes = 0;
interface CBTData {
  testcase: String;
  config: String;
}
@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"]
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartLabels: Label[] = ["Have Config", "No config"];
  public doughnutChartType: ChartType = "doughnut";

  cbtData: any;
  noConfigdata: CBTData[];
  tableData: any;
  showCBTData: boolean;
  data: any;
  constructor() {
    this.data = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };
  }

  ngOnInit() {
    this.showCBTData = false;
  }
  public selectData(e: any) {
    if (e.element._index == 1) {
      const filterDt = this.cbtData;
      this.tableData = filterDt.filter(
        element => element.Config == "None" || element.Config == null
      );
    }
    if (e.element._index == 0) {
      const filterDat = this.cbtData;
      this.tableData = filterDat.filter(
        element => element.Config != "None" && element.Config != null
      );
    }
  }
  public arrToObject(arr) {
    var keys = arr[0];
    var newArr = arr.slice(1, arr.length);
    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    return formatted;
  }
  public changeLabel(event) {
    document.getElementById("fileUploadLabel").innerText =
      event.srcElement.value;
    this.changeddata();
  }
  public changeddata() {
    this.showCBTData = false;
    configno = 0;
    configyes = 0;
    const input = <HTMLInputElement>document.getElementById("inputexcel");
    readXlsxFile(input.files[0]).then(rows => {
      if (rows.length > 0) {
        for (let i = 1; i < rows.length; i++) {
          if (
            rows[i][1] == "None" ||
            rows[i][1] == " " ||
            rows[i][1] == "" ||
            rows[i][1] == "none" ||
            rows[i][1] == null
          ) {
            configno = configno + 1;
          }
        }
        configyes = rows.length - 1 - configno;
        this.data.datasets[0].data = [configyes, configno];
        this.cbtData = this.arrToObject(rows);
        this.tableData = this.cbtData;
        this.showCBTData = true;
      }
    });
  }
}
