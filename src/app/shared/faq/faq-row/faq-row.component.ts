import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-row',
  templateUrl: './faq-row.component.html',
  styleUrls: ['./faq-row.component.css']
})
export class FaqRowComponent implements OnInit {
  
  btnVal = "Details"
  changeBtn() {
    if (this.btnVal=="Hide") {this.btnVal = "Details"} 
    else {this.btnVal = "Hide"}
  }

  isShown: boolean = false ;
  divShow() {
    this.isShown = ! this.isShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

  


  

}
