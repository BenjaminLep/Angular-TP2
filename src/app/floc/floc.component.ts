import { Component, OnInit } from '@angular/core';

const MAILLOT: string = "assets/";

@Component({
  selector: 'app-floc',
  templateUrl: './floc.component.html',
  styleUrls: ['./floc.component.css']
})
export class FlocComponent implements OnInit {

  srcPath1 = "assets/1.jpg";
  srcPath2: string = "assets/2.jpg";
  srcPath3: string = "assets/3.jpg";
  srcPath4: string = "assets/4.jpg";
  srcPath5: string = "assets/badge1.jpg";
  srcPath6: string = "assets/badge2.png";
  srcPath7: string = "assets/badge3.jpg";
  menu: boolean = false;
  isOff: boolean = true;
  color: string ='red';
  bordercolor: string ='red';
  loadImage : string = "assets/1.jpg";
  images: string[] = ["2.jpg", "3.jpg", "4.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

  flockage(){
    if (this.isOff = this.color === "red") {
      this.color = "black";
      this.bordercolor = "black";
    } else {
      this.color = "red";
      this.bordercolor = "red";
      this.menu  = !this.menu;
    }
  }

  zoom(){
    console.log('zoom');
    let i: number = 0;
    this.loadImage = MAILLOT + this.images[i];
    i++;


    
  }

}
