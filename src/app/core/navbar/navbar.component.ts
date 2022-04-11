import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from 'src/app/shared/dark-mode/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() scrollDeltaY!: number;
  @Output() setLang = new EventEmitter<string>();
  
  isNavbar: boolean = true;
  isSubmenuVisible: boolean = false;
  isDarkModeOn!: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private darkmodeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }

  openBottomNavbar() {
    document.body.style.overflow = 'hidden';
    this.isSubmenuVisible = true;
  }

  closeBottomNavbar() {
    document.body.style.overflow = 'overlay';
    this.isSubmenuVisible = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
