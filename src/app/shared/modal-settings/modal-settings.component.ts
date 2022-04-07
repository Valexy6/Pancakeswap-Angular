import { Component,  OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.css']
})
export class ModalSettingsComponent implements OnInit {
  closeResult!: string;

  expertActive = false;
  disableMultihopsActive = false;
  subGraphHealthIndicatorActive = false;
  flippySoundsActive = false;

  constructor(private modalService: NgbModal) { }
    
  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'ps-modal-centered',modalDialogClass: 'modal-container-settings' });
  }

}


