import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
