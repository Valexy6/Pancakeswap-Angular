import { Component, Input, OnInit } from '@angular/core';
export interface IFaqType {
  title: string;
  description:string;
}

@Component({
  selector: 'app-faq-row',
  templateUrl: './faq-row.component.html',
  styleUrls: ['./faq-row.component.css']
})
export class FaqRowComponent implements OnInit {
  @Input() faqTextInput:IFaqType={
    title: '',
    description: ''
  }

  constructor() { }

  ngOnInit(): void {
    console.log('Ciao,', this.faqTextInput.title)
  }

  btnVal = "Details"
  changeBtn() {
    if (this.btnVal=="Hide") {this.btnVal = "Details"} 
    else {this.btnVal = "Hide"}
  }

  isShown: boolean = false ;
  divShow() {
    this.isShown = ! this.isShown;
  }

}
