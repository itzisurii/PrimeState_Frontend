import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css'],
})
export class NavBar {


  @Input() isDark = false;

  // Emits up to AppComponent to toggle the theme
  @Output() themeToggled = new EventEmitter<void>();

  selectedLang: 'EN' | 'AR' = 'EN';

  toggle() {
    this.themeToggled.emit();
  }

  setLang(lang: 'EN' | 'AR') {
    this.selectedLang = lang;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
