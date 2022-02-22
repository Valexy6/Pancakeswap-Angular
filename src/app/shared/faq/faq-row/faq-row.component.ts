import { Component, Input, OnInit } from '@angular/core';
import { IFaqTexts } from 'src/app/models/FaqTexts';

@Component({
  selector: 'app-faq-row',
  templateUrl: './faq-row.component.html',
  styleUrls: ['./faq-row.component.css']
})
export class FaqRowComponent implements OnInit {
  @Input() faqTextInput!: IFaqTexts;
  
  btnVal = "Details";
  isShown: boolean = false ;

  constructor() { }

  ngOnInit(): void {

  }

  
  changeBtn() {
    if (this.btnVal=="Hide") {this.btnVal = "Details"} 
    else {this.btnVal = "Hide"}
  }

  
  divShow() {
    this.isShown = !this.isShown;
  }

}
