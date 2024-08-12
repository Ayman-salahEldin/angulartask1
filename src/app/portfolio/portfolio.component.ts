import { Component } from '@angular/core';

interface IImgs{
  imgsrc:string
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 imags:IImgs[] =[
  {imgsrc:"./assets/imgs/poert1.png"},
  {imgsrc:"./assets/imgs/port2.png"},
  {imgsrc:"./assets/imgs/port3.png"},
  {imgsrc:"./assets/imgs/poert1.png"},
  {imgsrc:"./assets/imgs/port2.png"},
  {imgsrc:"./assets/imgs/port3.png"},
 ]

 isClick:boolean=false
imgsrc:string=""
 open(mainImg:string)
 {
  this.isClick=true
  this.imgsrc=mainImg
 }
 close(){
  this.isClick=false
 }
}


