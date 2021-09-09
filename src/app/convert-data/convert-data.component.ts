import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Data } from 'src/app/model/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convert-data',
  templateUrl: './convert-data.component.html',
  styleUrls: ['./convert-data.component.css']
})
export class ConvertDataComponent implements OnInit  {
  valueOutput: string | undefined;
  dataText: Data = new Data();

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  TextToBase64() {
    this.dataService.TextToBase64(this.dataText)
    .subscribe(
      (data:any) => {
        // console.log(data),
        this.valueOutput = data.value ;
      },
      error => {
        console.log(error)
      }
    );
  }

  Base64ToText() {
    this.dataService.Base64ToText(this.dataText)
    .subscribe(
      (data:any) => {
        // console.log(data.value),
        this.valueOutput = data.value ;
      },
      error => {
        console.log(error)
      }
    );
  }

}
