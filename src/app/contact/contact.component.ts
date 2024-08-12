import { NgClass } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  iswrite:boolean=false
  @ViewChild ('userNameLabel') userNameLabel!:ElementRef
  @ViewChild ('userAgeLabel') userAgeLabel!:ElementRef
  @ViewChild ('userMailLabel') userMailLabel!:ElementRef
  @ViewChild ('userPassLabel') userPassLabel!:ElementRef

  showUserElem(){
    this.userNameLabel.nativeElement.classList.remove('d-none')
  }
  showAgeElem(){
    this.userAgeLabel.nativeElement.classList.remove('d-none')
  }
  showMailElem(){
    this.userMailLabel.nativeElement.classList.remove('d-none')
  }
   showPassElem(){
    this.userPassLabel.nativeElement.classList.remove('d-none')
  }

  show()
  {
    this.iswrite=true
  }
  

  
  
}
