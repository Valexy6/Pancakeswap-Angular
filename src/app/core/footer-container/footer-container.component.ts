import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from 'src/app/shared/dark-mode/dark-mode.service';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.css']
})
export class FooterContainerComponent implements OnInit, OnDestroy {
  @Input() langSelected!: string;
  
  colorLink: string = 'var(--mauve)';
  isFooter: boolean = true;
  isDarkModeOn!: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  languages: string[] = [
    "English",
    "Bahasa Indonesia",
    "中文",
    "Tiếng Việt",
    "Italiano",
    "русский",
    "Türkiye",
    "Português",
    "Español",
    "日本語",
    "Français",
    "Datch",
    "Filipino",
    "ქართული ენა",
    "Announcements",
  ]

  constructor(private darkmodeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkmodeService.darkModeState$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res) => this.isDarkModeOn = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
