import { Component,  Input,  OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.css']
})
export class ModalSettingsComponent implements OnInit {
  @Input() isDarkModeOn!: boolean;
  closeResult!: string;

  expertActive = false;
  disableMultihopsActive = false;
  subGraphHealthIndicatorActive = false;
  flippySoundsActive = false;

  percentages: string[] = ['0.1', '0.5', '1.0'];
  slippagePercentage: string = '0.5';
  clicked: boolean = true;

  constructor(private modalService: NgbModal) { }
    
  ngOnInit(): void {
  }

  openScrollableContent(content: any) {
    this.modalService.open(content, { windowClass: 'ps-modal-centered',modalDialogClass: 'modal-container-settings', scrollable: true });
  }

  changeSlippage(value: string) {
    this.slippagePercentage = value;
  }
}


