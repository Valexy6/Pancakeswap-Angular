import { Component, OnInit, } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-clock',
  templateUrl: './modal-clock.component.html',
  styleUrls: ['./modal-clock.component.css']
})

export class ModalClockComponent implements OnInit  {

  constructor(private modalService: NgbModal) {}
  

  closeResult = '';
  
  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }

  

  ngOnInit(): void {
  }

}
