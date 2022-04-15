import { Component, Input, OnInit, } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-clock',
  templateUrl: './modal-clock.component.html',
  styleUrls: ['./modal-clock.component.css']
})

export class ModalClockComponent implements OnInit  {
  closeResult!: string;
  @Input() isDarkModeOn!: boolean;
  
  constructor(private modalService: NgbModal) {}
  
  open(content: any) {
    this.modalService.open(content, { windowClass: 'ps-modal-centered',modalDialogClass: 'modal-container' });
  }

  ngOnInit(): void {
  }

}
