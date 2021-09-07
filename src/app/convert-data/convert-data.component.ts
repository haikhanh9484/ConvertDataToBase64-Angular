import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Data } from 'src/app/model/data.model';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';


import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-convert-data',
  templateUrl: './convert-data.component.html',
  styleUrls: ['./convert-data.component.css']
})
export class ConvertDataComponent implements OnInit, PipeTransform  {
  valueOutput: string | undefined;
  valueOuputImgEncode: string | undefined;

  data: Data = new Data();
  data2: Data = new Data();

  // filePath: any[] = [];

  constructor(private dataService: DataService,
    private router: Router) { }
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  TextToBase64() {
    this.dataService.TextToBase64(this.data)
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

  Base64ToText() {
    this.dataService.Base64ToText(this.data)
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

  url = '';
  selectedFile !: File;
  onSelectFile(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile = event.target.files[0];
      reader.onload = (event:any) => { 
        this.url = event.target.result;
        // console.log(this.url)
      }
    }
  }

  ImgToBase64() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.dataService.ImgToBase64(uploadImageData)
    .subscribe(
      (data:any) => {
        // console.log(data.value),
        this.valueOuputImgEncode = data.value;
      },
      error => {
        console.log(error)
      }
    );
  }

  // url2 = 'data:image/jpeg;base64,';
  url2 = '';
  sanitizer!: DomSanitizer;
  Base64toImg(){
    // this.url2 = this.data2.value;
    console.log(this.data2.value);
    this.dataService.Base64ToImg(this.data2)
    .subscribe(
      (data:any) => {
        console.log(data.value),
        this.valueOutput = data.value ;
        this.sanitizer.bypassSecurityTrustResourceUrl(data.value);
      },
      error => {
        console.log(error.error.text)
      }
      );
  }
}
