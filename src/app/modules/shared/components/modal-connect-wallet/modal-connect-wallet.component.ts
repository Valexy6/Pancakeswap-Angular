import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-connect-wallet',
  templateUrl: './modal-connect-wallet.component.html',
  styleUrls: ['./modal-connect-wallet.component.css']
})
export class ModalConnectWalletComponent implements OnInit {
  @Input() isDarkModeOn!: boolean;
  @Input() buttonClass?: 'button-standard' | 'button-small' | 'button-medium' | 'button-large' | 'button-squashed';
  currentRoute: string = this.router.url;
  
  constructor(private modalService: NgbModal, private router: Router) { }
    
  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'ps-modal-centered', modalDialogClass: 'modal-container', scrollable: true  });
  }

}
