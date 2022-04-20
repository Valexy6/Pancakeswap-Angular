import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormControl} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable,startWith, Subject, takeUntil} from 'rxjs';
import { ICurrencyModal } from 'src/app/models/CurrencyModal';
import { DarkModeService } from 'src/app/modules/shared/services/dark-mode.service';

@Component({
  selector: 'app-trade-swap',
  templateUrl: './trade-swap.component.html',
  styleUrls: ['./trade-swap.component.css'],
  providers: [DecimalPipe]
})
export class TradeSwapComponent implements OnInit {
  currencyModal: ICurrencyModal[] = [
    {
      id: 1,
      img: 'assets/icons/bnb-token.svg',
      label1: 'BNB',
      label2: 'BNB',
    },
    {
      id: 2,
      img: 'https://pancakeswap.finance/images/tokens/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F.png',
      label1: 'ALPACA',
      label2: 'Alpaca',
    },
    {
      id: 3,
      img: 'https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png',
      label1: 'BELT',
      label2: 'Belt',
    },
    {
      id: 4,
      img: 'https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png',
      label1: 'BTCB',
      label2: 'Btcb Token',
    },
    {
      id: 5,
      img: 'https://pancakeswap.finance/images/tokens/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51.png',
      label1: 'BUNNY',
      label2: 'Pancake Bunny',
    },
    {
      id: 6,
      img: 'https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png',
      label1: 'BUSD',
      label2: 'Busd Token',
    },
    {
      id: 7,
      img: 'assets/icons/pancakes.svg',
      label1: 'CAKE',
      label2: 'PancakeSwap Token',
    },
    {
      id: 8,
      img: 'https://pancakeswap.finance/images/tokens/0xA7f552078dcC247C2684336020c03648500C6d9F.png',
      label1: 'EPS',
      label2: 'Ellipsis',
    },
    {
      id: 9,
      img: 'https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png',
      label1: 'ETH',
      label2: 'Ethereum Token',
    },
    {
      id: 10,
      img: 'https://pancakeswap.finance/images/tokens/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096.png',
      label1: 'NRV',
      label2: 'Nerve Finance',
    },
    {
      id: 11,
      img: 'https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png',
      label1: 'TKO',
      label2: 'TokoCrypto',
    },
    {
      id: 12,
      img: 'https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png',
      label1: 'USDT',
      label2: 'Tether USD',
    },
    {
      id: 13,
      img: 'https://pancakeswap.finance/images/tokens/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7.png',
      label1: 'VAI',
      label2: 'VAI Stablecoin',
    },
    {
      id: 14,
      img: 'https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png',
      label1: 'WBNB',
      label2: 'Wbnb Token',
    },
    {
      id: 15,
      img: 'https://pancakeswap.finance/images/tokens/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63.png',
      label1: 'XVS',
      label2: 'Venus',
    }
  ]

  token1: string = this.currencyModal[0].label1;
  token2: string = this.currencyModal[6].label1;
  newToken!: number;
  isShown: boolean = false ;

  currency$: Observable<ICurrencyModal[]>;
  filter = new FormControl('');

  isDarkModeOn!: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: NgbModal, pipe: DecimalPipe, private darkmodeService: DarkModeService) { 
    this.currency$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit(): void {
    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }

  divShow() {
    this.isShown = !this.isShown;
  }

  search(text: string, pipe: PipeTransform): ICurrencyModal[] {
    return this.currencyModal.filter(currency => {
      const term = text.toLowerCase();
      return currency.label1.toLowerCase().includes(term)
    });
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'ps-modal-centered', modalDialogClass: 'modal-container'});
  }

  selectedToken(token: string) {
    if(token === this.token1) {
      this.newToken = 0;
    } else {
      this.newToken = 1;
    }
  }

  selectNewTokens(label: string) {
    if(this.newToken === 0) {
      this.token1 = label;
    } else {
      this.token2 = label;
    }
  }

  swapTokens() {
    [this.token1, this.token2] = [this.token2, this.token1]; 
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
