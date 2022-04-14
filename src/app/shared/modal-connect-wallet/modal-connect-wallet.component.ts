import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-connect-wallet',
  templateUrl: './modal-connect-wallet.component.html',
  styleUrls: ['./modal-connect-wallet.component.css']
})
export class ModalConnectWalletComponent implements OnInit {
  closeResult!: string;
  @Input() buttonClass?: 'button-standard' | 'button-small' | 'button-medium' | 'button-large' | 'button-squashed';

  @Input() isDarkModeOn!: boolean;
  @Input() buttonClass?: 'button-standard' | 'button-small' | 'button-medium' | 'button-large' | 'button-squashed';
  
  constructor(private modalService: NgbModal) { }
    
  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'ps-modal-centered', modalDialogClass: 'modal-container' });
  }

}
