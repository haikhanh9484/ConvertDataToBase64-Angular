import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convert-img-base64',
  templateUrl: './convert-img-base64.component.html',
  styleUrls: ['./convert-img-base64.component.css']
})
export class ConvertImgBase64Component implements OnInit {
  // valueOuputImgEncode: string | undefined;
  valueOuputImgEncode!: string;
  url = '';
  selectedFile !: File;

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  onSelectFile(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile = event.target.files[0];
      // console.log(event.target.files[0]);
      reader.onload = (event:any) => { 
        this.url = event.target.result;
        // console.log(this.url)
      }
    }
  }

  ImgToBase64() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
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
}
